import type {
    ColumnDef,
    ColumnFiltersState,
    HeaderContext,
    Table,
    PaginationState,
    SortingState,
} from '@tanstack/react-table'
import type { DateRange } from 'react-day-picker'

export type Status = {
    title: 'Активна' | 'В роботі' | 'Виконана' | 'Скасована'
    id: 'ACTIVE' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'
}

export type Category = {
    title:
        | 'Їжа та продукти'
        | 'Медична допомога'
        | 'Одяг'
        | 'Дім та укриття'
        | 'Транспорт'
        | 'Інше'
    id: 'MEDICAL' | 'FOOD' | 'TRANSPORT' | 'CLOTHING' | 'SHELTER' | 'OTHER'
}

export type CategoryColors = {
    bg: string
    color: string
}

export type RequestUserData = {
    id: string
    name: string
    email: string
    phone: string
}

export type ResRequest = {
    id: string
    city: string
    title: string
    description: string
    user: RequestUserData
    category: Category['id']
    status: Status['id']
    createdAt: Date
}
export type ResRequests = {
    data: ResRequest[]
    meta: {
        totalItems: number
        totalPages: number
        currentPage: number
        itemsPerPage: number
    }
}

export interface TransformedRequestsResponse {
    data: RequestTableRow[]
    meta: ResRequests['meta']
}

export type RequestTableRow = {
    userName: RequestUserData['name']
    status: Status['id']
    category: Category['id']
} & Omit<ResRequest, 'user' | 'description' | 'status' | 'category'>

export type ReqCreateRequest = {
    city: string
    title: string
    description: string
    category: Category['id']
}

export type ReqUpdateRequest = {
    id: string
    patch: ReqCreateRequest
}

export type ReqUpdateRequestStatus = {
    id: string
    patch: Status['id']
}

export interface DataTableProps<TData> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: ColumnDef<TData, any>[]
    data: TData[]
    columnFilters: ColumnFiltersState
    pagination: PaginationState
    sorting: SortingState
    pageCount: number

    onColumnFiltersChange: React.Dispatch<
        React.SetStateAction<ColumnFiltersState>
    >
    onPaginationChange: React.Dispatch<React.SetStateAction<PaginationState>>
    onSortingChange: React.Dispatch<React.SetStateAction<SortingState>>

    isLoading?: boolean
    isFetching?: boolean
    dateRange: DateRange | undefined
    onDateRangeChange: (range: DateRange | undefined) => void
}

export interface SearchFormProps<TData> {
    table: Table<TData>
    columnId: string
    placeholder?: string
}

export interface DefaultHeaderProps<T> {
    info: HeaderContext<RequestTableRow, T>
    name: string
}

export type QueryRequest = {
    search?: string
    page?: number
    limit?: number
    sortBy?: string
    order?: 'asc' | 'desc'
    city?: string
    category?: Category['id']
    status?: Status['id']
    createdAtFrom?: string
    createdAtTo?: string
}
