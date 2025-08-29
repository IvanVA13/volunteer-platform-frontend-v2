import { useEffect, type PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from '../constants/routes.constants'

export default function PublicRoute({ children }: PropsWithChildren) {
    const user = null // TODO: get user from redux
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate(routes.home, { replace: true })
        }
    }, [user, navigate])

    return children
}
