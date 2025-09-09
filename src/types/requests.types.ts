import type { ColumnDef, HeaderContext, Table } from '@tanstack/react-table'

export type Status = {
    title: 'Активна' | 'В роботі' | 'Виконана' | 'Скасована'
    id: 'active' | 'in_progress' | 'completed' | 'cancelled'
}

export type Category = {
    title:
        | 'Їжа'
        | 'Медична допомога'
        | 'Одяг'
        | 'Дім та укриття'
        | 'Транспорт'
        | 'Інше'
    id: 'medical' | 'food' | 'transport' | 'clothing' | 'shelter' | 'other'
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
    createAt: Date
}

export type RequestTable = {
    userName: RequestUserData['name']
} & Omit<ResRequest, 'user' | 'description'>

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
}

export interface SearchFormProps<TData> {
    table: Table<TData>
    columnId: string
    placeholder?: string
}

export interface DefaultHeaderProps<T> {
    info: HeaderContext<RequestTable, T>
    name: string
}
