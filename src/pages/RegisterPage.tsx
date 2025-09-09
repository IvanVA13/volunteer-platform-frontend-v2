import { Checkbox } from '@/components/ui/checkbox'

export default function RegisterPage() {
    return (
        <section className="pt-[40px] pb-[40px] md:pt-[80px] md:pb-[80px] xl:pb-[150px]">
            <div className="pl-[16px] pr-[16px] max-w-[450px] md:max-w-[650px] xl:max-w-[1372px] ml-auto mr-auto flex">
                <div className="w-full xl:pl-[109px] xl:pr-[132px] xl:pt-[17px] xl:pb-[17px]">
                    <h2 className="font-family font-extrabold text-[28px] leading-[100%] tracking-[-0.01em] text-black mb-[16px] text-center md:text-[48px] md:mb-[16px]">
                        Створіть аккаунт
                    </h2>
                    <p className="font-family font-normal text-[16px] leading-[150%] text-black mb-[20px] md:mb-[30px] ">
                        Щоб ми могли вам краще допомогти, нам потрібно трохи
                        дізнатися про вас
                    </p>
                    <form className="">
                        <label
                            htmlFor="userName"
                            className="font-family block font-normal text-[14px] leading-[171%] mb-[6px] md:text-[16px]"
                        >
                            Прізвище та ім'я
                        </label>
                        <div className="">
                            <input
                                className="font-family hover:border-[#000] focus:border-[#000] border-solid border border-gray-400 pt-[16px] pb-[16px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[16px] md:text-[16px] md:mb-[20px]"
                                placeholder="Повне ім'я"
                                id="userName"
                                type="text"
                                name="userName"
                                required
                            />
                        </div>
                        <label
                            htmlFor="registr-page-title"
                            className="font-family block font-normal text-[14px] leading-[171%] mb-[6px] md:text-[16px]"
                        >
                            Номер телефону
                        </label>
                        <div className="">
                            <input
                                className="font-family hover:border-[#000] focus:border-[#000] border-solid border border-gray-400 pt-[16px] pb-[16px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[16px] md:text-[16px] md:mb-[20px]"
                                id="tel"
                                type="tel"
                                placeholder="+380"
                                name="tel"
                                required
                            />
                        </div>
                        <label
                            htmlFor="city"
                            className="font-family block font-normal text-[14px] leading-[171%] mb-[6px] md:text-[16px]"
                        >
                            Місто
                        </label>
                        <div className="">
                            <input
                                className="font-family hover:border-[#000] focus:border-[#000] border-solid border border-gray-400 pt-[16px] pb-[16px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[16px] md:text-[16px] md:mb-[20px]"
                                placeholder="Ваше місто"
                                id="city"
                                type="text"
                                name="city"
                                required
                            />
                        </div>

                        <label
                            htmlFor="email"
                            className="font-family block font-normal text-[14px] leading-[171%] mb-[6px]  md:text-[16px]"
                        >
                            Електронна пошта
                        </label>
                        <div className="">
                            <input
                                className="font-family hover:border-[#000] focus:border-[#000] border-solid border border-gray-400 pt-[16px] pb-[16px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[16px] md:text-[16px] md:mb-[20px]"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Введіть email"
                                required
                            />
                        </div>

                        <label
                            htmlFor="password"
                            className="font-family block font-normal text-[14px] leading-[171%] mb-[6px] md:text-[16px]"
                        >
                            Пароль
                        </label>
                        <div className="">
                            <input
                                className="font-family hover:border-[#000] focus:border-[#000] border-solid border border-gray-400 pt-[16px] pb-[16px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[20px] md:text-[16px] md:mb-[20px]"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Введіть пароль"
                                required
                            />
                        </div>
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
                            className="font-family hover:bg-[#262626] focus:bg-[#262626] rounded-md w-[100%] font-medium text-[14px] leading-[171%] text-[#fafafa] mb-[30px] h-[50px] flex justify-center items-center bg-black"
                            type="submit"
                        >
                            Створити аккаунт
                        </button>
                    </form>
                    <span className="font-family text-center block ml-auto font-medium mr-auto leading-[100%] text-[ #525252] text-[14px]">
                        Вже маєте акаунт?&nbsp;
                        <a
                            className="font-family underline text-[#334155]"
                            href="#"
                        >
                            Увійти
                        </a>
                    </span>
                </div>
                <img
                    src="./src/img/registr-page.jpg"
                    alt="Register page"
                    className="hidden xl:block object-cover"
                />
            </div>
        </section>
    )
}
