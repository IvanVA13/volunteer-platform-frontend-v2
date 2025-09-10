import { Link } from 'react-router'
import { navigation } from '@/constants/nav.constants'
import { Button } from './button'

export default function Navigation() {
    return (
        <nav className="flex flex-col md:flex-row gap-y-4 gap-x-3 xl:gap-x-10 text-gray-700 text-sm lg:text-base">
            {navigation.map(({ title, route }, id) => (
                <Button
                    className="h-auto text-base py-3"
                    key={id}
                    asChild
                    type="button"
                    variant="ghost"
                >
                    <Link to={route}>{title}</Link>
                </Button>
            ))}
        </nav>
    )
}
