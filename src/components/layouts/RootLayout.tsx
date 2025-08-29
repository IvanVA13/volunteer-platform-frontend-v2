import { Outlet } from 'react-router-dom'
import Navigation from '../ui/Navigation'

export default function RootLayout() {
    return (
        <main>
            <Navigation />
            <Outlet />
        </main>
    )
}
