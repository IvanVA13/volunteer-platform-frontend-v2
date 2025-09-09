import { useEffect, type PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from '../constants/routes.constants'

export default function ProtectedRoute({ children }: PropsWithChildren) {
    const accessToken = localStorage.getItem('access_token')
    const navigate = useNavigate()

    useEffect(() => {
        if (!accessToken) {
            navigate(routes.login, { replace: true })
        }
    }, [accessToken, navigate])

    return children
}
