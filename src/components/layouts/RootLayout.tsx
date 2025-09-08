import { Outlet } from 'react-router-dom'

import Header from '../ui/Header'

export default function RootLayout() {
    return (
        <main>
            <Header />
            <Outlet />
        </main>
    )
}
