import type { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { routes } from '../constants/routes.constants'

export default function ProtectedRoute({ children }: PropsWithChildren) {
    const accessToken = localStorage.getItem('access_token')

    if (!accessToken) {
        return <Navigate to={routes.login} replace />
    }

    return children
}
