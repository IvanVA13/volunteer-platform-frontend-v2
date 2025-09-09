import { routes } from './routes.constants'

export type Navigation = {
    title: string
    route: string
}

export const navigation: Navigation[] = [
    {
        title: 'Про нас',
        route: routes.about,
    },
    {
        title: 'Партнери',
        route: routes.partners,
    },
    {
        title: 'Підтримати нас',
        route: routes.supportUs,
    },
    {
        title: "Зв'язатись з нами",
        route: routes.contacts,
    },
]
