import { Search } from 'lucide-react'

import type { SearchFormProps } from '@/types/requests.types'
import { Input } from './input'

export function SearchForm<TData>({
    table,
    columnId,
    placeholder,
}: SearchFormProps<TData>) {
    return (
        <div className="relative flex items-center">
            <Input
                placeholder={placeholder}
                value={
                    (table.getColumn(columnId)?.getFilterValue() as string) ??
                    ''
                }
                onChange={(event) =>
                    table
                        .getColumn(columnId)
                        ?.setFilterValue(event.target.value)
                }
                className="h-10 px-2 py-3 pl-9.5 max-w-50 md:max-w-none md:min-w-80"
            />
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4.5 -translate-y-1/2 opacity-50 select-none" />
        </div>
    )
}
