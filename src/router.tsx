import { createBrowserRouter } from 'react-router-dom'

import { routes } from './constants/routes.constants'

import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import RequestsPage from './pages/RequestsPage'
import CreateRequestPage from './pages/CreateRequestPage'
import MyRequestsPage from './pages/MyRequestsPage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'
import ContactsPage from './pages/ContactsPage'
import RequestPage from './pages/RequestPage'
import AboutPage from './pages/AboutPage'
import PartnersPage from './pages/PartnersPage'
import SupportUsPage from './pages/SupportUsPage'

import RootLayout from './components/layouts/RootLayout'
import RequestsLayout from './components/layouts/RequestsLayout'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'

export const router = createBrowserRouter([
    {
        path: `${routes.home}`,
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: routes.about, element: <AboutPage /> },
            { path: routes.partners, element: <PartnersPage /> },
            { path: routes.supportUs, element: <SupportUsPage /> },
            { path: routes.contacts, element: <ContactsPage /> },
            {
                path: routes.profile,
                element: (
                    <ProtectedRoute>
                        <ProfilePage />
                    </ProtectedRoute>
                ),
            },

            {
                path: routes.requests,
                element: (
                    <ProtectedRoute>
                        <RequestsLayout />
                    </ProtectedRoute>
                    // <RequestsLayout />
                ),
                children: [
                    { index: true, element: <RequestsPage /> },
                    {
                        path: routes.createRequest,
                        element: <CreateRequestPage />,
                    },
                    { path: routes.myRequests, element: <MyRequestsPage /> },
                    {
                        path: routes.request,
                        element: <RequestPage />,
                    },
                ],
            },

            {
                path: routes.register,
                element: (
                    <PublicRoute>
                        <RegisterPage />
                    </PublicRoute>
                ),
            },
            {
                path: routes.login,
                element: (
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                ),
            },
        ],
    },
    { path: '*', element: <NotFoundPage /> },
])
