import { Button } from '@/components/ui/button'
import { routes } from '@/constants/routes.constants'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
    return (
        <section className="pt-[10px] pb-[80px] xl:pt-[80px] xl:pb-[150px]">
            <div className="pl-[10px] pr-[10px] ml-auto mr-auto max-w-[375px] xl:flex xl:max-w-[1340px] xl:justify-center">
                <svg
                    className="mb-[16px] xl:hidden"
                    width="343px"
                    height="357px"
                >
                    <use href="./src/img/icons.svg#icon-illustration-1" />
                </svg>
                <div className="xl:pt-[168px] xl:pb-[168px] xl:pl-[72px] xl:pr-[72px]">
                    <svg
                        className="ml-auto mr-auto mb-[20px] xl:hidden"
                        width="203px"
                        height="80px"
                    >
                        <use href="./src/img/icons.svg#icon-404" />
                    </svg>
                    <svg
                        className="ml-auto mr-auto mb-[40px] hidden xl:block"
                        width="344px"
                        height="132px"
                    >
                        <use href="./src/img/icons.svg#icon-1" />
                    </svg>
                    <h2 className="font-extrabold text-2xl leading-[133%] tracking-[-0.01em] text-center text-black mb-[16px] font-family xl:text-4xl xl:leading-[100%]">
                        Сторінку не знайдено
                    </h2>
                    <p className=" mb-[16px] font-family font-normal text-sm leading-[171%] text-center text-black xl:text-base xl:leading-[150%] xl:mb-[30px]">
                        Ця сторінка пішла на допомогу іншим… А ми вас проведемо
                        назад
                    </p>
                    <ul className="xl:flex xl:gap-[20px]">
                        <li>
                            <Button
                                asChild
                                variant="secondary"
                                type="button"
                                className="h-auto mb-[10px] font-family w-[343px] px-4 py-2 rounded-[6px] bg-[#fde047] font-medium text-sm leading-[171%] text-black xl:w-[204px] xl:mb-[0]"
                            >
                                <Link to={routes.home}>
                                    Повернутись на головну
                                </Link>
                            </Button>
                        </li>
                        <li>
                            <Button
                                asChild
                                variant="outline"
                                type="button"
                                className="h-auto border border-black rounded-[6px] px-4 py-2 w-[343px] font-medium text-sm leading-[171%] text-black xl:w-[204px] xl:px-[7px]"
                            >
                                <Link to={routes.home}>
                                    Перезавантажити сторінку
                                </Link>
                            </Button>
                        </li>
                    </ul>
                </div>
                <svg className="hidden xl:block" width="650px" height="676px">
                    <use href="./src/img/icons.svg#icon-illustration" />
                </svg>
            </div>
        </section>
    )
}
