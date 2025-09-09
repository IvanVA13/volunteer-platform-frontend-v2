import { Button } from '@/components/ui/button'
import {
    Globe,
    GraduationCap,
    Heart,
    Home,
    PlusCircle,
    Utensils,
} from 'lucide-react'
export default function HelpPage() {
    return (
        <section className="pt-[20px] pb-[80px] md:pt-[50px] xl:pt-[80px] xl:pb-[150px]">
            <div className="pl-[10px] pr-[10px] max-w-[500px] ml-auto mr-auto md:max-w-[1340px] ">
                <h2 className="font-family font-extrabold text-[24px] leading-[133%] tracking-[-0.01em] text-center text-black mb-[16px] md:text-[48px] md:leading-[100%] ">
                    Яку допомогу ви хочете отримати?
                </h2>
                <ul className="md:flex md:flex-wrap md:gap-[20px] mb-[20px] md:mb-[70px]">
                    <li className="md:mb-[0] md:w-[calc((100%-20px)/2)]  flex border-2 border-[#e7e5e4] rounded-[12px] p-[20px_16px] shadow-[0_4px_6px_rgba(0,0,0,0.09)] mb-[16px] md:p-[45px_20px]">
                        <div className="w-[120px] h-[120px] bg-[#fef08a] rounded-[50%] flex justify-center items-center mr-[16px] flex-shrink-0">
                            <Home className="w-[70px] h-[70px] text-black" />
                        </div>
                        <div>
                            <p className="font-family mb-[16px] font-semibold text-[18px] leading-[156%] text-black md:text-[24px] md:leading-[133%]">
                                Дім та укриття
                            </p>
                            <p className="font-family font-normal text-[14px] leading-[171%] text-black md:text-[16px] md:leading-[150%] ">
                                Допомагаємо забезпечити безпечне та комфортне
                                житло для тих, хто його потребує
                            </p>
                        </div>
                    </li>
                    <li className="md:mb-[0] md:w-[calc((100%-20px)/2)] flex border-2 border-[#e7e5e4] rounded-[12px] p-[20px_16px] shadow-[0_4px_6px_rgba(0,0,0,0.09)] md:p-[45px_20px]">
                        <div className="w-[120px] h-[120px] bg-[#fef08a] rounded-[50%] flex justify-center items-center mr-[16px] flex-shrink-0">
                            <Heart className="w-[70px] h-[70px] text-black" />
                        </div>
                        <div>
                            <p className="font-family mb-[16px] font-semibold text-[18px] leading-[156%] text-black md:text-[24px] md:leading-[133%]">
                                Психологічна підтримка
                            </p>
                            <p className="font-family font-normal text-[14px] leading-[171%] text-black md:text-[16px] md:leading-[150%]">
                                Підтримуємо людей у складні моменти, надаючи
                                підтримку
                            </p>
                        </div>
                    </li>
                    <li className="md:mb-[0] md:w-[calc((100%-20px)/2)] flex border-2 border-[#e7e5e4] rounded-[12px] p-[20px_16px] shadow-[0_4px_6px_rgba(0,0,0,0.09)] md:p-[45px_20px]">
                        <div className="w-[120px] h-[120px] bg-[#fef08a] rounded-[50%] flex justify-center items-center mr-[16px] flex-shrink-0">
                            <Utensils className="w-[70px] h-[70px] text-black" />
                        </div>
                        <div>
                            <p className="font-family mb-[16px] font-semibold text-[18px] leading-[156%] text-black md:text-[24px] md:leading-[133%]">
                                Їжа та продукти
                            </p>
                            <p className="font-family font-normal text-[14px] leading-[171%] text-black md:text-[16px] md:leading-[150%]">
                                Надаємо якісні продукти харчування для тих, хто
                                цього потребує
                            </p>
                        </div>
                    </li>
                    <li className="md:mb-[0] md:w-[calc((100%-20px)/2)] flex border-2 border-[#e7e5e4] rounded-[12px] p-[20px_16px] shadow-[0_4px_6px_rgba(0,0,0,0.09)] md:p-[45px_20px]">
                        <div className="w-[120px] h-[120px] bg-[#fef08a] rounded-[50%] flex justify-center items-center mr-[16px] flex-shrink-0">
                            <GraduationCap className="w-[70px] h-[70px] text-black" />
                        </div>
                        <div>
                            <p className="font-family mb-[16px] font-semibold text-[18px] leading-[156%] text-black md:text-[24px] md:leading-[133%]">
                                Освіта та розвиток
                            </p>
                            <p className="font-family font-normal text-[14px] leading-[171%] text-black md:text-[16px] md:leading-[150%]">
                                Сприяємо доступу до якісної освіти для всіх
                                людей, відкриваючи можливості для розвитку
                            </p>
                        </div>
                    </li>

                    <li className=" md:mb-[0] md:w-[calc((100%-20px)/2)] flex border-2 border-[#e7e5e4] rounded-[12px] p-[20px_16px] shadow-[0_4px_6px_rgba(0,0,0,0.09)] md:p-[45px_20px]">
                        <div className="w-[120px] h-[120px] bg-[#fef08a] rounded-[50%] flex justify-center items-center mr-[16px] flex-shrink-0">
                            <PlusCircle className="w-[70px] h-[70px] text-black" />
                        </div>
                        <div>
                            <p className="font-family mb-[16px] font-semibold text-[18px] leading-[156%] text-black md:text-[24px] md:leading-[133%]">
                                Медична допомога
                            </p>
                            <p className="font-family font-normal text-[14px] leading-[171%] text-black md:text-[16px] md:leading-[150%]">
                                Підтримуємо здоров’я людей, забезпечуючи
                                необхідну медичну допомогу
                            </p>
                        </div>
                    </li>
                    <li className="md:mb-[0] md:w-[calc((100%-20px)/2)] flex border-2 border-[#e7e5e4] rounded-[12px] p-[20px_16px] shadow-[0_4px_6px_rgba(0,0,0,0.09)] md:p-[45px_20px]">
                        <div className="w-[120px] h-[120px] bg-[#fef08a] rounded-[50%] flex justify-center items-center mr-[16px] flex-shrink-0">
                            <Globe className="w-[70px] h-[70px] text-black" />
                        </div>
                        <div>
                            <p className="font-family mb-[16px] font-semibold text-[18px] leading-[156%] text-black md:text-[24px] md:leading-[133%]">
                                Інше
                            </p>
                            <p className="font-family font-normal text-[14px] leading-[171%] text-black md:text-[16px] md:leading-[150%]">
                                Скажіть, що саме вас турбує, і ми спробуємо
                                разом вирішити
                            </p>
                        </div>
                    </li>
                </ul>

                <Button
                    type="button"
                    className="font-family rounded-md hover:bg-[#262626] focus:bg-[#262626]  w-[100%] font-medium text-[14px] leading-[171%] text-[#fafafa]  h-[50px] flex justify-center items-center bg-black xl:w-[204px] xl:ml-auto"
                >
                    Далі
                </Button>
            </div>
        </section>
    )
}
