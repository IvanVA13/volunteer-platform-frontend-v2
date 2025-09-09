import type { PropsWithChildren } from 'react'

export default function Container({
    children,
    className,
}: PropsWithChildren<{
    className?: string
}>) {
    return (
        <div
            className={`container mx-auto px-4 py-4 sm:px-6 lg:px-8 ${className}`}
        >
            {children}
        </div>
    )
}
