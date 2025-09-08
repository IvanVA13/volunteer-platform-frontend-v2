import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Post {
    id: number
    title: string
    body: string
}

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => 'posts?_limit=5',
        }),
    }),
})

export const { useGetPostsQuery } = postsApi
