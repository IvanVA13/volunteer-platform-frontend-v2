import { useEffect, type PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from '../constants/routes.constants'

export default function ProtectedRoute({ children }: PropsWithChildren) {
    const user = null // TODO: get user from redux
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate(routes.login, { replace: true })
        }
    }, [user, navigate])

    return children
}
