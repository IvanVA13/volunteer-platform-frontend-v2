import { Link } from 'react-router-dom'

import {
    type FilterFn,
    type Row,
    createColumnHelper,
} from '@tanstack/react-table'
import { type Request } from '@/types/requests.types'
import { routes } from '@/constants/routes.constants'
import {
    statusTitleMap,
    categoriesTitleMap,
    categoryColorMap,
} from '@/constants/requests.constants'

import DefaultHeader from './default-header'

declare module '@tanstack/react-table' {
    interface ColumnMeta<TData, TValue> {
        displayName?: string
        mobileVisible?: boolean
        _dummy?: (data: TData, value: TValue) => void
    }
}

const dateRangeFilter: FilterFn<Request> = (
    row: Row<Request>,
    columnId: string,
    value: [Date | null, Date | null]
) => {
    const dateValue: Date = row.getValue(columnId)

    if (!dateValue || isNaN(dateValue.getTime())) {
        return false
    }

    const [start, end] = value

    if (start && end) {
        return (
            dateValue.getTime() >= start.getTime() &&
            dateValue.getTime() <= end.getTime()
        )
    }

    return true
}

const columnHelper = createColumnHelper<Request>()

export const columns = [
    columnHelper.accessor('userName', {
        header: (info) => <DefaultHeader info={info} name="Ім'я" />,
        meta: {
            displayName: "Ім'я",
            mobileVisible: true,
        },
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('createAt', {
        header: (info) => <DefaultHeader info={info} name="Дата" />,
        meta: {
            displayName: 'Дата',
            mobileVisible: true,
        },
        cell: (info) => info.getValue().toLocaleDateString('uk-UA'),
        filterFn: dateRangeFilter,
    }),
    columnHelper.accessor('title', {
        header: (info) => <DefaultHeader info={info} name="Запит" />,
        meta: {
            displayName: 'Запит',
            mobileVisible: true,
        },
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('city', {
        header: (info) => <DefaultHeader info={info} name="Локація" />,
        meta: {
            displayName: 'Локація',
            mobileVisible: true,
        },
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('category', {
        header: (info) => <DefaultHeader info={info} name="Тип допомоги" />,
        meta: {
            displayName: 'Тип допомоги',
            mobileVisible: true,
        },
        cell: (info) => {
            const categoryId = info.getValue()
            const colors = categoryColorMap[categoryId] || {
                bg: 'bg-gray-100',
                color: 'text-gray-600',
            }

            const title = categoriesTitleMap.get(categoryId) || categoryId
            return (
                <span
                    className={`rounded-sm inline-flex justify-center p-1 ${colors.bg} ${colors.color}`}
                >
                    {title}
                </span>
            )
        },
        filterFn: 'arrIncludesSome',
    }),
    columnHelper.accessor('status', {
        header: (info) => <DefaultHeader info={info} name="Статус заявки" />,
        meta: {
            displayName: 'Статус заявки',
            mobileVisible: true,
        },
        cell: (info) => {
            const statusId = info.getValue()

            return statusTitleMap.get(statusId) || statusId
        },
        filterFn: 'arrIncludesSome',
    }),
    columnHelper.accessor('id', {
        header: () => 'Дія',
        meta: {
            mobileVisible: false,
        },
        cell: (info) => (
            <Link to={`${routes.requests}/${info.getValue()}`}>
                Переглянути запит
            </Link>
        ),
    }),
]
