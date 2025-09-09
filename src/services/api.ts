import { Mutex } from 'async-mutex'
import {
    createApi,
    fetchBaseQuery,
    type BaseQueryFn,
    type FetchArgs,
    type FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import type {
    ReqCreateUser,
    ReqLoginUser,
    ReqUpdateUserArg,
    ResLoginUser,
    ResUser,
} from '@/types/users.types'
import type {
    ReqCreateRequest,
    RequestTable,
    ReqUpdateRequest,
    ReqUpdateRequestStatus,
    ResRequest,
} from '@/types/requests.types'

function isRefreshResult(data: unknown): data is ResLoginUser {
    return (
        typeof data === 'object' &&
        data !== null &&
        'access_token' in data &&
        typeof (data as ResLoginUser).access_token === 'string'
    )
}

const mutex = new Mutex()
const baseQuery = fetchBaseQuery({
    // baseUrl: import.meta.env.VITE_BASE_URL,
    baseUrl: 'http://localhost:3000/api/',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('access_token')
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    },
})

const customFetchBase: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result.error && result.error.status === 401) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire()
            try {
                const refreshResult = await baseQuery(
                    {
                        url: 'users/refreshToken',
                        method: 'POST',
                    },
                    api,
                    extraOptions
                )

                if (refreshResult.data && isRefreshResult(refreshResult.data)) {
                    localStorage.setItem(
                        'access_token',
                        refreshResult.data.access_token
                    )

                    result = await baseQuery(args, api, extraOptions)
                } else {
                    api.dispatch(apiSlice.endpoints.logout.initiate())
                }
            } finally {
                release()
            }
        } else {
            await mutex.waitForUnlock()
            result = await baseQuery(args, api, extraOptions)
        }
    }

    return result
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: customFetchBase,

    endpoints: (builder) => ({
        register: builder.mutation<ResUser, ReqCreateUser>({
            query: (newUser) => ({
                url: 'users/register',
                method: 'POST',
                body: newUser,
            }),
        }),
        login: builder.mutation<ResLoginUser, ReqLoginUser>({
            query: (user) => ({
                url: 'users/login',
                method: 'POST',
                body: user,
            }),
            async onQueryStarted(_, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    localStorage.setItem('access_token', data.access_token)
                } catch (err) {
                    throw new Error(String(err))
                    // console.log(err)
                }
            },
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: 'users/logout',
                method: 'POST',
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled
                } finally {
                    localStorage.removeItem('access_token')

                    dispatch(apiSlice.util.resetApiState())
                }
            },
        }),

        updateUser: builder.mutation<ResUser, ReqUpdateUserArg>({
            query: ({ id, ...patch }) => ({
                url: `/users/${id}`,
                method: 'PATCH',
                body: patch,
            }),
        }),

        getUser: builder.query<ResUser, void>({
            query: () => 'users/profile',
        }),

        getRequests: builder.query<RequestTable[], void>({
            query: () => 'requests',

            transformResponse: (response: ResRequest[]) => {
                const transformedData = response.map((request) => {
                    const { user, ...rest } = request

                    return {
                        userName: user.name,
                        ...rest,
                    }
                })

                return transformedData
            },
        }),
        createRequest: builder.mutation<ResRequest, ReqCreateRequest>({
            query: (newRequest) => ({
                url: 'requests',
                method: 'POST',
                body: newRequest,
            }),
        }),

        getRequestById: builder.query<ResRequest[], number>({
            query: (id) => `/requests/${id}`,
        }),

        updateRequest: builder.mutation<Partial<ResRequest>, ReqUpdateRequest>({
            query: ({ id, ...patch }) => ({
                url: `/requests/${id}`,
                method: 'PATCH',
                body: patch,
            }),
        }),

        updateRequestStatus: builder.mutation<
            ResRequest['status'],
            ReqUpdateRequestStatus
        >({
            query: ({ id, ...patch }) => ({
                url: `/requests/${id}`,
                method: 'PATCH',
                body: patch,
            }),
        }),

        deleteRequest: builder.mutation<void, number>({
            query: (id) => ({
                url: `/requests/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
})

export const {
    useGetRequestsQuery,
    useCreateRequestMutation,
    useDeleteRequestMutation,
    useGetRequestByIdQuery,
    useGetUserQuery,
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
    useUpdateRequestMutation,
    useUpdateRequestStatusMutation,
    useUpdateUserMutation,
} = apiSlice
