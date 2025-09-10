import type {
    Category,
    CategoryColors,
    // RequestTableRow,
    Status,
} from '@/types/requests.types'

export const statuses: Status[] = [
    {
        title: 'Активна',
        id: 'ACTIVE',
    },
    {
        title: 'В роботі',
        id: 'IN_PROGRESS',
    },
    {
        title: 'Виконана',
        id: 'COMPLETED',
    },
    {
        title: 'Скасована',
        id: 'CANCELLED',
    },
]

export const categories: Category[] = [
    {
        title: 'Їжа та продукти',
        id: 'FOOD',
    },
    {
        title: 'Медична допомога',
        id: 'MEDICAL',
    },
    {
        title: 'Одяг',
        id: 'CLOTHING',
    },
    {
        title: 'Дім та укриття',
        id: 'SHELTER',
    },
    {
        title: 'Транспорт',
        id: 'TRANSPORT',
    },
    {
        title: 'Інше',
        id: 'OTHER',
    },
]

// export const data: RequestTableRow[] = [
//     {
//         id: '1111',
//         city: 'Київ',
//         title: 'Потрібна вода',
//         userName: 'Петренко Петро',
//         category: 'food',
//         status: 'active',
//         createAt: new Date(2025, 8, 1),
//     },
//     {
//         id: '1112',
//         city: 'Київ',
//         title: 'Потрібні бинти',
//         userName: 'Петренко Петро',
//         category: 'medical',
//         status: 'active',
//         createAt: new Date(2025, 8, 1),
//     },
//     {
//         id: '1113',
//         city: 'Миїв',
//         title: 'Потрібен зимовий одяг',
//         userName: 'Петренко Петро',
//         category: 'clothing',
//         status: 'active',
//         createAt: new Date(2025, 8, 1),
//     },
//     {
//         id: '1114',
//         city: 'Київ',
//         title: 'Потрібен корм для котів',
//         userName: 'Петренко Петро',
//         category: 'other',
//         status: 'active',
//         createAt: new Date(2025, 8, 3),
//     },
//     {
//         id: '1115',
//         city: 'Дніпро',
//         title: 'Потрібен корм для котів',
//         userName: 'Петренко Петро',
//         category: 'other',
//         status: 'active',
//         createAt: new Date(2025, 8, 5),
//     },
//     {
//         id: '1115',
//         city: 'Дніпро',
//         title: 'Потрібен корм для котів',
//         userName: 'Петренко Петро',
//         category: 'other',
//         status: 'active',
//         createAt: new Date(2025, 8, 5),
//     },
//     {
//         id: '1115',
//         city: 'Дніпро',
//         title: 'Потрібен корм для котів',
//         userName: 'Петренко Петро',
//         category: 'other',
//         status: 'active',
//         createAt: new Date(2025, 8, 5),
//     },
//     {
//         id: '1115',
//         city: 'Дніпро',
//         title: 'Потрібен корм для котів',
//         userName: 'Петренко Петро',
//         category: 'other',
//         status: 'active',
//         createAt: new Date(2025, 8, 5),
//     },
//     {
//         id: '1115',
//         city: 'Дніпро',
//         title: 'Потрібен корм для котів',
//         userName: 'Петренко Петро',
//         category: 'other',
//         status: 'active',
//         createAt: new Date(2025, 8, 5),
//     },
//     {
//         id: '1115',
//         city: 'Дніпро',
//         title: 'Потрібен корм для котів',
//         userName: 'Петренко Петро',
//         category: 'other',
//         status: 'active',
//         createAt: new Date(2025, 8, 5),
//     },
//     {
//         id: '1115',
//         city: 'Дніпро',
//         title: 'Потрібен корм для котів',
//         userName: 'Петренко Петро',
//         category: 'other',
//         status: 'active',
//         createAt: new Date(2025, 8, 5),
//     },
//     {
//         id: '1115',
//         city: 'Дніпро',
//         title: 'Потрібен корм для котів',
//         userName: 'Петренко Петро',
//         category: 'other',
//         status: 'active',
//         createAt: new Date(2025, 8, 5),
//     },
//     {
//         id: '1115',
//         city: 'Дніпро',
//         title: 'Потрібен корм для котів',
//         userName: 'Петренко Петро',
//         category: 'other',
//         status: 'active',
//         createAt: new Date(2025, 8, 5),
//     },
// ]

export const categoryColorMap: Record<Category['id'], CategoryColors> = {
    MEDICAL: { bg: 'bg-pink-100', color: 'text-pink-600' },
    FOOD: { bg: 'bg-green-100', color: 'text-green-600' },
    TRANSPORT: { bg: 'bg-blue-100', color: 'text-blue-600' },
    CLOTHING: { bg: 'bg-purple-100', color: 'text-purple-600' },
    SHELTER: { bg: 'bg-orange-100', color: 'text-orange-600' },
    OTHER: { bg: 'bg-amber-100', color: 'text-amber-600' },
}

export const statusTitleMap = new Map(
    statuses.map((status) => [status.id, status.title])
)
export const categoriesTitleMap = new Map(
    categories.map((category) => [category.id, category.title])
)

export const getStatusTitle = (id: Status['id']) => statusTitleMap.get(id)
export const getCategoryTitle = (id: Category['id']) =>
    categoriesTitleMap.get(id)
