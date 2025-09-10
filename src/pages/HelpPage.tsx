import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { getSupport } from '@/constants/help.constants'
import { routes } from '@/constants/routes.constants'

export default function HelpPage() {
    return (
        <section className="pt-[20px] pb-[80px] md:pt-[50px] xl:pt-[80px] xl:pb-[150px]">
            <div className="flex flex-col gap-y-5 md:gap-y-[70px] mx-auto md:max-w-[1340px] px-[10px] max-w-[500px]">
                <h2 className="font-family font-extrabold text-[24px] leading-[133%] tracking-[-0.01em] text-center text-black mb-[16px] md:text-[48px] md:leading-[100%] ">
                    Яку допомогу ви хочете отримати?
                </h2>
                <ul className="md:flex md:flex-wrap md:gap-[20px]">
                    {getSupport.map(({ icon: Icon, text, title }, id) => (
                        <li
                            key={id}
                            className="md:mb-[0] md:w-[calc((100%-20px)/2)]  flex border-2 border-[#e7e5e4] rounded-[12px] p-[20px_16px] shadow-[0_4px_6px_rgba(0,0,0,0.09)] mb-[16px] md:p-[45px_20px]"
                        >
                            <div className="w-[120px] h-[120px] bg-[#fef08a] rounded-[50%] flex justify-center items-center mr-[16px] flex-shrink-0">
                                <Icon
                                    className="w-[70px] h-[70px]"
                                    strokeWidth={1}
                                />
                            </div>
                            <div>
                                <p className="font-family mb-[16px] font-semibold text-[18px] leading-[156%] text-black md:text-[24px] md:leading-[133%]">
                                    {title}
                                </p>
                                <p className="font-family font-normal text-[14px] leading-[171%] text-black md:text-[16px] md:leading-[150%] ">
                                    {text}
                                </p>
                            </div>
                        </li>
                    ))}
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
