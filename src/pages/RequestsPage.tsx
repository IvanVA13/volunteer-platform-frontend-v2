'use client'

import { columns } from '@/components/ui/requests/columns'
import { DataTable } from '@/components/ui/requests/data-table'
import { data } from '@/constants/requests.constants'

export default function RequestsPage() {
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

                <DataTable columns={columns} data={data} />
            </div>
        </main>
    )
}
