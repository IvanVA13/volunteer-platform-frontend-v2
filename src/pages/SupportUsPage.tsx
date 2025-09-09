import { Link } from 'react-router-dom'
import { Coins, Users } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { routes } from '@/constants/routes.constants'

export default function SupportUsPage() {
    return (
        <section className="pt-[20px] pb-[80px] md:pt-[50px] xl:pt-[80px] xl:pb-[150px]">
            <div className="pl-[10px] pr-[10px] max-w-[500px] ml-auto mr-auto md:max-w-[650px] xl:max-w-[1340px]">
                <h2 className="font-family font-extrabold text-[24px] leading-[133%] tracking-[-0.01em] text-center text-black mb-[16px] md:text-[48px] md:leading-[100%] ">
                    Хочете допомогти?
                </h2>
                <p className="font-family mb-[20px] font-normal text-[14px] leading-[171%] text-center text-black md:text-[16px] md:leading-[150%] md:mb-[70px]">
                    Дякуємо, що вирішили підтримати нашу справу! Ваша допомога
                    робить світ кращим, і кожен внесок має значення
                </p>
                <ul className="xl:flex xl:gap-[20px] xl:mb-[70px]">
                    <li className="xl:mb-[0] flex border-2 border-[#e7e5e4] rounded-[12px] p-[20px_16px] shadow-[0_4px_6px_rgba(0,0,0,0.09)] mb-[16px] md:p-[45px_20px]">
                        <div className="w-[120px] h-[120px] bg-[#fef08a] rounded-[50%] flex justify-center items-center mr-[16px] flex-shrink-0">
                            <Coins className="size-[70px]" strokeWidth={1} />
                        </div>
                        <div>
                            <p className="font-family mb-[16px] font-semibold text-[18px] leading-[156%] text-black md:text-[24px] md:leading-[133%]">
                                Підтримати фінансово
                            </p>
                            <p className="font-family font-normal text-[14px] leading-[171%] text-black md:text-[16px] md:leading-[150%] ">
                                Кожен ваш внесок — це шанс допомагати тим, хто
                                переживає непрості часи
                            </p>
                        </div>
                    </li>
                    <li className=" xl:mb-[0] flex border-2 border-[#e7e5e4] rounded-[12px] p-[20px_16px] shadow-[0_4px_6px_rgba(0,0,0,0.09)] md:p-[45px_20px] mb-[20px] md:mb-[50px]">
                        <div className="w-[120px] h-[120px] bg-[#fef08a] rounded-[50%] flex justify-center items-center mr-[16px] flex-shrink-0">
                            <Users className="size-[70px]" strokeWidth={1} />
                        </div>
                        <div>
                            <p className="font-family mb-[16px] font-semibold text-[18px] leading-[156%] text-black md:text-[24px] md:leading-[133%]">
                                Допомогти людині напряму
                            </p>
                            <p className="font-family font-normal text-[14px] leading-[171%] text-black md:text-[16px] md:leading-[150%]">
                                Безпосередньо підтримайте того, хто цього
                                потребує у складні часи
                            </p>
                        </div>
                    </li>
                </ul>

                <Button
                    asChild
                    type="button"
                    className="font-family rounded-md hover:bg-[#262626] focus:bg-[#262626]  w-[100%] font-medium text-[14px] leading-[171%] text-[#fafafa]  h-[50px] flex justify-center items-center bg-black xl:w-[204px] xl:ml-auto"
                >
                    <Link to={routes.register}>Далі</Link>
                </Button>
            </div>
        </section>
    )
}
