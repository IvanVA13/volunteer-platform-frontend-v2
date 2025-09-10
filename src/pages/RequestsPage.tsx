'use client'

import { columns } from '@/components/ui/requests/columns'
import DataTable from '@/components/ui/requests/data-table'

import { useGetRequestsQuery } from '@/services/api'
import type {
    PaginationState,
    ColumnFiltersState,
    SortingState,
} from '@tanstack/react-table'

import { useMemo, useState } from 'react'
import type { DateRange } from 'react-day-picker'

export default function RequestsPage() {
    const [range, setRange] = useState<DateRange | undefined>({
        from: new Date(2025, 0, 1),
        to: new Date(2025, 8, 30),
    })
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [sorting, setSorting] = useState<SortingState>([])
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    })

    const queryParams = useMemo(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const params: Record<string, any> = {
            page: pagination.pageIndex + 1,
            limit: pagination.pageSize,
        }

        columnFilters.forEach((filter) => {
            if (params[filter.id] === 'title') {
                params.search = filter.value
            }

            params[filter.id] = filter.value
        })

        if (sorting.length > 0) {
            params.sortBy = sorting[0].id
            params.order = sorting[0].desc ? 'desc' : 'asc'
        }

        if (range?.from && range?.to) {
            params.createAt = [range.from.toISOString(), range.to.toISOString()]
        } else if (range?.from) {
            // Якщо вибрана тільки одна дата
            params.createAt = [range.from.toISOString()]
        }

        return params
    }, [range, columnFilters, pagination, sorting])

    const {
        data: response,
        isLoading,
        isFetching,
    } = useGetRequestsQuery(queryParams)
    const data = response?.data || []
    const pageCount = response?.meta?.totalPages ?? -1
    return (
        <main>
            <div className="container flex flex-col items-center justify-center gap-y-7.5 md:gap-y-15 mx-auto px-4 pt-5 pb-20 md:pt-20 md:px-15">
                <div className="container flex flex-col md:items-center justify-center gap-y-4">
                    <h1 className="font-extrabold text-2xl leading-8 md:text-5xl/tight">
                        Ваша підтримка змінює життя
                    </h1>
                    <p>
                        Ми цінуємо кожного волонтера. Оберіть, кому ви готові
                        допомогти сьогодні
                    </p>
                </div>

                <DataTable
                    columns={columns}
                    data={data}
                    pageCount={pageCount}
                    columnFilters={columnFilters}
                    pagination={pagination}
                    sorting={sorting}
                    onColumnFiltersChange={setColumnFilters}
                    onPaginationChange={setPagination}
                    onSortingChange={setSorting}
                    isLoading={isLoading}
                    isFetching={isFetching}
                    dateRange={range}
                    onDateRangeChange={setRange}
                />
            </div>
        </main>
    )
}
