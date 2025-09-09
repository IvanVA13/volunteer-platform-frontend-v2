import { FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa'

import type { DefaultHeaderProps } from '@/types/requests.types'

export function DefaultHeader<TValue>({
    info,
    name,
}: DefaultHeaderProps<TValue>) {
    const sorted = info.column.getIsSorted()

    return (
        <div
            onPointerDown={(e) => {
                e.preventDefault()
                info.column.toggleSorting(info.column.getIsSorted() === 'asc')
            }}
            className="w-full h-full flex flex-row items-center justify-start gap-4 cursor-default text-center"
        >
            {name}
            {sorted === 'asc' && <FaSortAlphaDown />}
            {sorted === 'desc' && <FaSortAlphaUp />}
        </div>
    )
}

export default DefaultHeader
