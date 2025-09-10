import type { ComponentProps } from 'react'

export type ReqCreateUser = {
    email: string
    name: string
    password: string
    phoneNumber: string
    role: 'VOLUNTEER' | 'USER'
    city: string
}

export type ReqLoginUser = {
    email: string
    password: string
}

export type ResLoginUser = {
    access_token: string
}

export type ResUser = {
    id: string
    email: string
    name: string
    phone: string
    city: string
    role: 'VOLUNTEER' | 'USER' | 'ADMIN'
    createdAt: Date
    updatedAt: Date
}

export type ReqUpdateUser = {
    email: string
    name: string
    phoneNumber: string
    city: string
    role: 'VOLUNTEER' | 'USER'
}

export type ReqUpdateUserArg = {
    id: number
    patch: ResUser
}

export type UserFormData<Ids> = {
    id: keyof Ids
    title: string
    placeholder: string
    type: ComponentProps<'input'>['type']
}
