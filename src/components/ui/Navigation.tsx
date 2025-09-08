import { NavLink } from 'react-router'
import { navigation } from '@/constants/nav.constants'

export default function Navigation() {
    return (
        <nav
            className="hidden md:flex gap-6 text-gray-700 text-sm md:text-base"
            style={{
                display: 'flex',
                justifyContent: 'center',
                columnGap: '20px',
            }}
        >
            {navigation.map(({ title, route }, id) => (
                <NavLink key={id} className="text-black" to={route}>
                    {title}
                </NavLink>
            ))}
        </nav>
    )
}
