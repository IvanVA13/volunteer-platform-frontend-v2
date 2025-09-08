'use client'
import { useEffect, useState } from 'react'
import {
    CalendarClockIcon,
    ChevronLeft,
    ChevronRight,
    Settings2,
} from 'lucide-react'
import type { DateRange } from 'react-day-picker'
import { uk } from 'date-fns/locale'

import {
    type ColumnFiltersState,
    type SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { SearchForm } from '@/components/ui/search-form'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { DOTS, usePagination } from '@/hooks/use-custom-pagination'
import { categories, statuses } from '@/constants/requests.constants'
import type { Category, DataTableProps, Status } from '@/types/requests.types'

import { Button } from '../button'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Link } from 'react-router-dom'
import { routes } from '@/constants/routes.constants'

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [range, setRange] = useState<DateRange | undefined>({
        from: new Date(2025, 0, 1),
        to: new Date(2025, 8, 30),
    })
    const [selectedStatuses, setSelectedStatuses] = useState<Status[]>([])
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([])
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 20,
    })

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
            pagination,
        },
    })

    const {
        previousPage,
        nextPage,
        getCanPreviousPage,
        getCanNextPage,
        setPageIndex,
        getState,
        getPageCount,
    } = table

    const paginationRange = usePagination({
        currentPage: pagination.pageIndex + 1,
        totalPages: getPageCount(),
        siblingCount: 1,
    })

    const isDesktop = useMediaQuery('(min-width: 1024px)')

    const popoverAlign = isDesktop ? 'end' : 'center'
    const popoverSide = isDesktop ? 'right' : 'bottom'
    const popoverSideOffset = isDesktop ? 8 : 4

    const handleStatusChange = (status: Status, checked: boolean) => {
        setSelectedStatuses((prev) => {
            if (checked) {
                return [...prev, status]
            } else {
                return prev.filter((s) => s.id !== status.id)
            }
        })
    }
    const handleCategoriesChange = (category: Category, checked: boolean) => {
        setSelectedCategories((prev) => {
            if (checked) {
                return [...prev, category]
            } else {
                return prev.filter((c) => c.id !== category.id)
            }
        })
    }

    useEffect(() => {
        if (range?.from && range?.to) {
            table.getColumn('createAt')?.setFilterValue([range.from, range.to])
        } else {
            table.getColumn('createAt')?.setFilterValue(undefined)
        }
    }, [range, table])

    useEffect(() => {
        const selectedIds = selectedStatuses.map((s) => s.id)

        if (selectedIds.length > 0) {
            table.getColumn('status')?.setFilterValue(selectedIds)
        } else {
            table.getColumn('status')?.setFilterValue(undefined)
        }
    }, [selectedStatuses, table])

    useEffect(() => {
        const selectedIds = selectedCategories.map((s) => s.id)

        if (selectedIds.length > 0) {
            table.getColumn('category')?.setFilterValue(selectedIds)
        } else {
            table.getColumn('category')?.setFilterValue(undefined)
        }
    }, [selectedCategories, table])

    return (
        <div className="w-full flex flex-col gap-4">
            <div className="flex justify-between items-center py-4 px-2 border-gray-200 border-1">
                <SearchForm
                    table={table}
                    columnId="title"
                    placeholder="Пошук..."
                />
                <div className="flex items-center gap-x-3">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline">
                                <span className="hidden lg:inline">
                                    {range?.from && range?.to
                                        ? `${range.from.toLocaleDateString('uk-UA')} - ${range.to.toLocaleDateString('uk-UA')}`
                                        : new Date().toLocaleDateString(
                                              'uk-UA'
                                          )}
                                </span>
                                <CalendarClockIcon />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent
                            align={popoverAlign}
                            side={popoverSide}
                            sideOffset={popoverSideOffset}
                            className="w-auto overflow-hidden p-0"
                        >
                            <Calendar
                                locale={uk}
                                mode="range"
                                defaultMonth={range?.from}
                                selected={range}
                                onSelect={setRange}
                                className="rounded-lg border shadow-sm"
                            />
                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline">
                                <span className="hidden lg:inline">
                                    Налаштування
                                </span>
                                <Settings2 />
                            </Button>
                        </PopoverTrigger>

                        <PopoverContent
                            align={popoverAlign}
                            side={popoverSide}
                            sideOffset={popoverSideOffset}
                            className="w-auto overflow-hidden"
                        >
                            <div className="grid gap-4">
                                <div className="space-y-2">
                                    <h4 className="leading-none font-medium">
                                        Налаштування
                                    </h4>
                                    <p className="text-muted-foreground text-sm">
                                        Встановіть налаштування фільтру.
                                    </p>
                                </div>
                                <div className="grid gap-2">
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="city">Місто</Label>
                                        <Input
                                            id="city"
                                            placeholder="Київ"
                                            className="col-span-2 h-8"
                                            value={
                                                (table
                                                    .getColumn('city')
                                                    ?.getFilterValue() as string) ??
                                                ''
                                            }
                                            onChange={(e) =>
                                                table
                                                    .getColumn('city')
                                                    ?.setFilterValue(
                                                        e.target.value
                                                    )
                                            }
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="numRows">
                                            Кількість строк
                                        </Label>
                                        <Input
                                            id="numRows"
                                            type="number"
                                            min="10"
                                            className="col-span-2 h-8"
                                            value={`${table.getState().pagination.pageSize}`}
                                            onChange={(e) => {
                                                table.setPageSize(
                                                    Number(e.target.value)
                                                )
                                            }}
                                        />
                                    </div>
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger className="py-3">
                                                Статус
                                            </AccordionTrigger>
                                            <AccordionContent className="flex flex-col gap-y-3">
                                                {statuses.map((status) => {
                                                    const { id, title } = status
                                                    return (
                                                        <div
                                                            key={id}
                                                            className="flex items-center gap-x-3"
                                                        >
                                                            <Label>
                                                                <Checkbox
                                                                    onCheckedChange={(
                                                                        checked
                                                                    ) =>
                                                                        handleStatusChange(
                                                                            status,
                                                                            !!checked
                                                                        )
                                                                    }
                                                                    checked={selectedStatuses.some(
                                                                        (s) =>
                                                                            s.id ===
                                                                            id
                                                                    )}
                                                                />

                                                                {title}
                                                            </Label>
                                                        </div>
                                                    )
                                                })}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-2">
                                            <AccordionTrigger className="py-3">
                                                Категорія
                                            </AccordionTrigger>
                                            <AccordionContent className="flex flex-col gap-y-3">
                                                {categories.map((category) => {
                                                    const { id, title } =
                                                        category
                                                    return (
                                                        <div
                                                            key={id}
                                                            className={`flex items-center gap-x-3`}
                                                        >
                                                            <Label>
                                                                <Checkbox
                                                                    onCheckedChange={(
                                                                        checked
                                                                    ) =>
                                                                        handleCategoriesChange(
                                                                            category,
                                                                            !!checked
                                                                        )
                                                                    }
                                                                    checked={selectedCategories.some(
                                                                        (
                                                                            category
                                                                        ) =>
                                                                            category.id ===
                                                                            id
                                                                    )}
                                                                />
                                                                {title}
                                                            </Label>
                                                        </div>
                                                    )
                                                })}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <div className="flex flex-2/3 flex-col overflow-hidden">
                {isDesktop ? (
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader className="sticky top-0 z-10 bg-neutral-200 shadow-md">
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                          header.column
                                                              .columnDef.header,
                                                          header.getContext()
                                                      )}
                                            </TableHead>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            data-state={
                                                row.getIsSelected() &&
                                                'selected'
                                            }
                                        >
                                            {row
                                                .getVisibleCells()
                                                .map((cell) => (
                                                    <TableCell key={cell.id}>
                                                        {flexRender(
                                                            cell.column
                                                                .columnDef.cell,
                                                            cell.getContext()
                                                        )}
                                                    </TableCell>
                                                ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={columns.length}
                                            className="h-24 text-center"
                                        >
                                            Запитів ще немає.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                ) : (
                    <div className="space-y-4 font-medium">
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <div
                                    key={row.id}
                                    className="border bg-card text-card-foreground shadow-sm p-4"
                                >
                                    <div>
                                        {row
                                            .getVisibleCells()
                                            .filter(
                                                (cell) =>
                                                    cell.column.columnDef.meta
                                                        ?.mobileVisible
                                            )
                                            .map((cell) => (
                                                <div
                                                    key={cell.id}
                                                    className="grid grid-cols-2 items-center text-sm py-3 border-b border-border last:border-b-0"
                                                >
                                                    <div>
                                                        {
                                                            cell.column
                                                                .columnDef.meta
                                                                ?.displayName
                                                        }
                                                    </div>

                                                    <div className="text-right">
                                                        {flexRender(
                                                            cell.column
                                                                .columnDef.cell,
                                                            cell.getContext()
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                    </div>

                                    <div className="border-t pt-5">
                                        <Link
                                            to={`${routes.requests}/${row.getValue('id')}`}
                                        >
                                            <Button
                                                variant="outline"
                                                className="w-full border-neutral-700 leading-6"
                                            >
                                                Переглянути запит
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="h-24 text-center flex items-center justify-center">
                                Запитів ще немає.
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className="flex items-center justify-center space-x-2 py-4">
                <Button
                    variant="link"
                    size="sm"
                    onClick={() => previousPage()}
                    disabled={!getCanPreviousPage()}
                >
                    {isDesktop ? 'Попередня' : <ChevronLeft />}
                </Button>

                {paginationRange.map((pageNumber, index) => {
                    if (pageNumber === DOTS) {
                        return (
                            <span key={`dots-${index}`} className="px-4 py-2">
                                &#8230;
                            </span>
                        )
                    }

                    return (
                        <Button
                            key={pageNumber}
                            variant={
                                pageNumber ===
                                getState().pagination.pageIndex + 1
                                    ? 'outline'
                                    : 'ghost'
                            }
                            size="sm"
                            onClick={() => setPageIndex(Number(pageNumber) - 1)}
                        >
                            {pageNumber}
                        </Button>
                    )
                })}

                <Button
                    variant="link"
                    size="sm"
                    onClick={() => nextPage()}
                    disabled={!getCanNextPage()}
                >
                    {isDesktop ? 'Наступна' : <ChevronRight />}
                </Button>
            </div>
        </div>
    )
}
