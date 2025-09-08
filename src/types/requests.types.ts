import type { ColumnDef, HeaderContext, Table } from '@tanstack/react-table'

export interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export interface SearchFormProps<TData> {
    table: Table<TData>
    columnId: string
    placeholder?: string
}

export interface DefaultHeaderProps<T> {
    info: HeaderContext<Request, T>
    name: string
}

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

export type Request = {
    id: string
    city: string
    title: string
    userName: RequestUserData['name']
    category: Category['id']
    status: Status['id']
    createAt: Date
}
