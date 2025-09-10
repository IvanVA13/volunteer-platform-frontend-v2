import type { ReqCreateUser, UserFormData } from '@/types/users.types'

export const inputsData: UserFormData<ReqCreateUser>[] = [
    {
        title: "Прізвище та ім'я",
        placeholder: "Повне ім'я",
        id: 'name',
        type: 'text',
    },
    {
        title: 'Номер телефону',
        placeholder: '+380',
        id: 'phoneNumber',
        type: 'tel',
    },
    {
        title: 'Місто',
        placeholder: 'Ваше місто',
        id: 'city',
        type: 'text',
    },
    {
        title: 'Електронна пошта',
        placeholder: 'Введіть email',
        id: 'email',
        type: 'email',
    },
    {
        title: 'Пароль',
        placeholder: 'Введіть пароль',
        id: 'password',
        type: 'password',
    },
]
