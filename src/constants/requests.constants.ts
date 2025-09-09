import type {
    Category,
    CategoryColors,
    RequestTable,
    Status,
} from '@/types/requests.types'

export const statuses: Status[] = [
    {
        title: 'Активна',
        id: 'active',
    },
    {
        title: 'В роботі',
        id: 'in_progress',
    },
    {
        title: 'Виконана',
        id: 'completed',
    },
    {
        title: 'Скасована',
        id: 'cancelled',
    },
]

export const categories: Category[] = [
    {
        title: 'Їжа',
        id: 'food',
    },
    {
        title: 'Медична допомога',
        id: 'medical',
    },
    {
        title: 'Одяг',
        id: 'clothing',
    },
    {
        title: 'Дім та укриття',
        id: 'shelter',
    },
    {
        title: 'Транспорт',
        id: 'transport',
    },
    {
        title: 'Інше',
        id: 'other',
    },
]

export const data: RequestTable[] = [
    {
        id: '1111',
        city: 'Київ',
        title: 'Потрібна вода',
        userName: 'Петренко Петро',
        category: 'food',
        status: 'active',
        createAt: new Date(2025, 8, 1),
    },
    {
        id: '1112',
        city: 'Київ',
        title: 'Потрібні бинти',
        userName: 'Петренко Петро',
        category: 'medical',
        status: 'active',
        createAt: new Date(2025, 8, 1),
    },
    {
        id: '1113',
        city: 'Миїв',
        title: 'Потрібен зимовий одяг',
        userName: 'Петренко Петро',
        category: 'clothing',
        status: 'active',
        createAt: new Date(2025, 8, 1),
    },
    {
        id: '1114',
        city: 'Київ',
        title: 'Потрібен корм для котів',
        userName: 'Петренко Петро',
        category: 'other',
        status: 'active',
        createAt: new Date(2025, 8, 3),
    },
    {
        id: '1115',
        city: 'Дніпро',
        title: 'Потрібен корм для котів',
        userName: 'Петренко Петро',
        category: 'other',
        status: 'active',
        createAt: new Date(2025, 8, 5),
    },
    {
        id: '1115',
        city: 'Дніпро',
        title: 'Потрібен корм для котів',
        userName: 'Петренко Петро',
        category: 'other',
        status: 'active',
        createAt: new Date(2025, 8, 5),
    },
    {
        id: '1115',
        city: 'Дніпро',
        title: 'Потрібен корм для котів',
        userName: 'Петренко Петро',
        category: 'other',
        status: 'active',
        createAt: new Date(2025, 8, 5),
    },
    {
        id: '1115',
        city: 'Дніпро',
        title: 'Потрібен корм для котів',
        userName: 'Петренко Петро',
        category: 'other',
        status: 'active',
        createAt: new Date(2025, 8, 5),
    },
    {
        id: '1115',
        city: 'Дніпро',
        title: 'Потрібен корм для котів',
        userName: 'Петренко Петро',
        category: 'other',
        status: 'active',
        createAt: new Date(2025, 8, 5),
    },
    {
        id: '1115',
        city: 'Дніпро',
        title: 'Потрібен корм для котів',
        userName: 'Петренко Петро',
        category: 'other',
        status: 'active',
        createAt: new Date(2025, 8, 5),
    },
    {
        id: '1115',
        city: 'Дніпро',
        title: 'Потрібен корм для котів',
        userName: 'Петренко Петро',
        category: 'other',
        status: 'active',
        createAt: new Date(2025, 8, 5),
    },
    {
        id: '1115',
        city: 'Дніпро',
        title: 'Потрібен корм для котів',
        userName: 'Петренко Петро',
        category: 'other',
        status: 'active',
        createAt: new Date(2025, 8, 5),
    },
    {
        id: '1115',
        city: 'Дніпро',
        title: 'Потрібен корм для котів',
        userName: 'Петренко Петро',
        category: 'other',
        status: 'active',
        createAt: new Date(2025, 8, 5),
    },
]

export const categoryColorMap: Record<Category['id'], CategoryColors> = {
    medical: { bg: 'bg-pink-100', color: 'text-pink-600' },
    food: { bg: 'bg-green-100', color: 'text-green-600' },
    transport: { bg: 'bg-blue-100', color: 'text-blue-600' },
    clothing: { bg: 'bg-purple-100', color: 'text-purple-600' },
    shelter: { bg: 'bg-orange-100', color: 'text-orange-600' },
    other: { bg: 'bg-amber-100', color: 'text-amber-600' },
}

export const statusTitleMap = new Map(
    statuses.map((status) => [status.id, status.title])
)
export const categoriesTitleMap = new Map(
    categories.map((category) => [category.id, category.title])
)
