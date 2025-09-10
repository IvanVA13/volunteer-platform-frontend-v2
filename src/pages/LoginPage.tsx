import { useState, type ChangeEvent, type FormEvent } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { inputsData } from '@/constants/login.constants'
import { routes } from '@/constants/routes.constants'
import type { ReqLoginUser } from '@/types/users.types'
import { useLoginMutation } from '@/services/api'
import loginImg from '@/assets/images/login-page.jpg'

export default function Login() {
    const [loginUser, { isLoading, isError, error }] = useLoginMutation()
    const navigate = useNavigate()
    const [formData, setFormData] = useState<ReqLoginUser>({
        email: '',
        password: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            await loginUser(formData).unwrap()
            navigate(routes.createRequest)
        } catch (err) {
            console.error('Помилка входу:', err)
        }
    }
    return (
        <section className="pt-[40px] pb-[40px] md:pt-[80px] md:pb-[80px] xl:pb-[150px]">
            <div className="flex xl:gap-x-[132px] items-center mx-auto px-4 max-w-[450px] md:max-w-[650px] xl:max-w-[1372px]">
                <div className="w-full xl:w-auto">
                    <h2 className="font-extrabold text-[28px] leading-[100%] tracking-[-0.01em] text-black mb-[16px] text-center md:text-[48px] md:mb-[16px]">
                        Увійти в аккаунт
                    </h2>
                    <p className="font-normal text-[16px] leading-[150%] text-black mb-[20px] md:mb-[30px] ">
                        Якщо ви вже маєте створений аккаунт, заповніть нижче
                        поля для входу
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-y-4 md:gap-y-5 mb-[30px]">
                            {inputsData.map(
                                ({ id, title, placeholder, type }, index) => (
                                    <Label
                                        key={index}
                                        className="flex flex-col items-start gap-y-1.5 font-normal leading-[171%] md:text-[16px]"
                                    >
                                        {title}
                                        <Input
                                            className="h-auto hover:border-[#000] focus:border-[#000] border-solid border border-gray-400 pt-[16px] pb-[16px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] placeholder:text-stone-400 md:text-[16px]"
                                            type={type}
                                            name={id}
                                            placeholder={placeholder}
                                            value={formData[id]}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Label>
                                )
                            )}
                        </div>

                        <div className="flex items-center mb-[50px]">
                            <Label
                                htmlFor="user-privacy"
                                className=" block font-medium text-[12px] leading-[167%] text-black md:text-[14px]"
                            >
                                <Checkbox className="mr-[8px]" />Я погоджуюсь
                                на&nbsp;
                                <a
                                    href="#"
                                    className="underline text-[#334155]"
                                >
                                    обробку моїх персональних даних
                                </a>
                            </Label>
                        </div>

                        {isError && (
                            <div className="text-red-600">
                                {'data' in error && 'Сталася помилка'}
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="hover:bg-[#262626] focus:bg-[#262626] rounded-md w-[100%] font-medium leading-[171%] text-[#fafafa] mb-[30px] h-[50px] flex justify-center items-center bg-black"
                        >
                            {isLoading ? 'Вхід...' : 'Увійти'}
                        </Button>
                    </form>

                    <span className="text-center block ml-auto font-medium mr-auto leading-[100%] text-[ #525252]">
                        Ще не маєте створеного аккаунту?
                        <NavLink
                            to={routes.register}
                            className="underline text-[#334155]"
                        >
                            Зареєструватися
                        </NavLink>
                    </span>
                </div>

                <div>
                    <img
                        src={loginImg}
                        alt="Login page"
                        className="hidden size-full xl:block object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
