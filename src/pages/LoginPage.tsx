import { Checkbox } from '@/components/ui/checkbox'
function Login() {
    return (
        <section className="pt-[40px] pb-[40px] md:pt-[80px] md:pb-[80px] xl:pb-[150px]">
            <div className="pl-[16px] pr-[16px] max-w-[450px] md:max-w-[650px] xl:max-w-[1372px] ml-auto mr-auto flex">
                <div className="w-full xl:pl-[109px] xl:pr-[132px] xl:pt-[122px] xl:pb-[122px]">
                    <h2 className="font-family font-extrabold text-[28px] leading-[100%] tracking-[-0.01em] text-black mb-[16px] text-center md:text-[48px] md:mb-[16px]">
                        Увійти в аккаунт
                    </h2>
                    <p className="font-family font-normal text-[16px] leading-[150%] text-black mb-[20px] md:mb-[30px] ">
                        Якщо ви вже маєте створений аккаунт, заповніть нижче
                        поля для входу
                    </p>
                    <form className="">
                        <label
                            htmlFor="email"
                            className="font-family block font-normal text-[14px] leading-[171%] mb-[6px] md:text-[16px]"
                        >
                            Електронна пошта
                        </label>
                        <input
                            type="email"
                            placeholder="Введіть email"
                            className="font-family hover:border-[#000] focus:border-[#000] border-solid border border-gray-400 pt-[16px] pb-[16px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[16px] md:text-[16px] md:mb-[20px]"
                        />
                        <label
                            htmlFor="password"
                            className="font-family block font-normal text-[14px] leading-[171%] mb-[6px] md:text-[16px]"
                        >
                            Пароль
                        </label>
                        <input
                            type="password"
                            placeholder="Введіть пароль"
                            className="font-family hover:border-[#000] focus:border-[#000] border-solid border border-gray-400 pt-[16px] pb-[16px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[16px] md:text-[16px] md:mb-[20px]"
                        />

                        <div className="flex items-center mb-[50px]">
                            <label
                                htmlFor="user-privacy"
                                className="font-family  block font-medium text-[12px] leading-[167%] text-black md:text-[14px]"
                            >
                                <Checkbox className="mr-[8px]" />Я погоджуюсь
                                на&nbsp;
                                <a
                                    href="#"
                                    className="font-family underline text-[#334155]"
                                >
                                    обробку моїх персональних даних
                                </a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="font-family hover:bg-[#262626] focus:bg-[#262626] rounded-md w-[100%] font-medium text-[14px] leading-[171%] text-[#fafafa] mb-[30px] h-[50px] flex justify-center items-center bg-black"
                        >
                            Увійти
                        </button>
                    </form>

                    <span className="font-family text-center block ml-auto font-medium mr-auto leading-[100%] text-[ #525252] text-[14px]">
                        Ще не маєте створеного аккаунту?{' '}
                        <a
                            href="#"
                            className="font-family underline text-[#334155]"
                        >
                            Зареєструватися
                        </a>
                    </span>
                </div>

                <img
                    src="./src/img/login-page.jpg"
                    alt="Login page"
                    className="hidden xl:block object-cover"
                />
            </div>
        </section>
    )
}

export default Login
