import { NavLink } from 'react-router'
import { routes } from '../../constants/routes.constants'

export default function Navigation() {
    return (
        <nav
            style={{
                display: 'flex',
                justifyContent: 'center',
                columnGap: '20px',
            }}
        >
            <NavLink to={routes.about}>Про нас</NavLink>
            <NavLink to={routes.partners}>Партнери</NavLink>
            <NavLink to={routes.supportUs}>Підтримати нас</NavLink>
            <NavLink to={routes.contacts}>Зв'язатись з нами</NavLink>
        </nav>
    )
}
