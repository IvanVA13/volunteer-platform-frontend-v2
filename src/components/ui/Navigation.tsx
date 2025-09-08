import { NavLink } from 'react-router'
import { navigation } from '@/constants/nav.constants'

export default function Navigation() {
    return (
        <nav className="flex flex-col md:flex-row gap-y-4 gap-x-3 xl:gap-x-10 text-gray-700 text-sm lg:text-base">
            {navigation.map(({ title, route }, id) => (
                <NavLink key={id} className="py-1" to={route}>
                    {title}
                </NavLink>
            ))}
        </nav>
    )
}
