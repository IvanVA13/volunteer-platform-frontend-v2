import type { ReqLoginUser, UserFormData } from '@/types/users.types'

export const inputsData: UserFormData<ReqLoginUser>[] = [
    {
        title: 'Електронна пошта',
        id: 'email',
        placeholder: 'Введіть email',
        type: 'email',
    },
    {
        title: 'Пароль',
        id: 'password',
        placeholder: 'Введіть пароль',
        type: 'password',
    },
]
