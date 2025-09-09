export type ReqCreateUser = {
    email: string
    name: string
    password: string
    phoneNumber: string
    role: 'volunteer' | 'user'
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
    role: 'volunteer' | 'user' | 'admin'
    createdAt: Date
    updatedAt: Date
}

export type ReqUpdateUser = {
    email: string
    name: string
    phoneNumber: string
    city: string
    role: 'volunteer' | 'user'
}

export type ReqUpdateUserArg = {
    id: number
    patch: ResUser
}
