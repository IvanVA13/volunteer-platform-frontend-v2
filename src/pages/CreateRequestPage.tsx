import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { regions, urgencies } from '@/constants/create-request.constants'
import { categories } from '@/constants/requests.constants'

export default function SupportUsPage() {
    return (
        <section className="py-5 md:py-[60px] xl:py-[80px]">
            <div className="px-[10px] mx-auto mb-[16px] max-w-[450px] md:max-w-[600px] xl:max-w-[690px]">
                <h2 className="font-extrabold text-[28px] leading-[100%] tracking-[-0.01em] text-black text-center md:text-[48px]">
                    Створення вашої заявки
                </h2>
                <p className="mb-4 md:mb-14 font-normal text-base leading-[150%] text-black text-center">
                    Розкажіть нам, яка саме допомога вам потрібна. Після цього
                    волонтер отримає вашу заявку і зможе з вами зв’язатися
                </p>
                <form>
                    <Label
                        htmlFor="name"
                        className="block font-normal text-[14px] leading-[171%] mb-[6px] md:text-[20px]"
                    >
                        Як до Вас звертатися?
                    </Label>
                    <div>
                        <Input
                            className="hover:border-[#000] focus:border-[#000] border-solid border border-gray-400 pt-[16px] pb-[16px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[16px] md:text-[16px] md:mb-[20px]"
                            placeholder="Богдана"
                            id="name"
                            type="text"
                            name="name"
                            required
                        />
                    </div>
                    <Label
                        htmlFor="region"
                        className="block font-normal text-[14px] leading-[171%] mb-[6px] md:text-[20px]"
                    >
                        Де ви знаходитесь? (область)
                    </Label>
                    <Select>
                        <SelectTrigger
                            className="flex  hover:border-[#000] focus:border-[#000] items-center h-[55px] border-solid border border-gray-400 pt-[27px] pb-[27px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[16px] md:text-[16px] md:mb-[20px]"
                            id="region"
                            name="region"
                        >
                            <SelectValue placeholder="Київська область" />
                        </SelectTrigger>
                        <SelectContent>
                            {regions.map((region, id) => (
                                <SelectItem key={id} value={region}>
                                    {region}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Label
                        className="block font-normal text-[14px] leading-[171%] mb-[6px] md:text-[16px]"
                        htmlFor="city"
                    >
                        Місто, район
                    </Label>
                    <div>
                        <Input
                            className="hover:border-[#000] focus:border-[#000] border-solid border border-gray-400 pt-[16px] pb-[16px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[16px] md:text-[16px] md:mb-[20px]"
                            placeholder="м.Київ, Печерский район"
                            id="city"
                            type="text"
                            name="city"
                            required
                        />
                    </div>
                    <Label
                        htmlFor="urgency"
                        className="block font-normal text-[14px] leading-[171%] mb-[6px] md:text-[20px]"
                    >
                        Терміновість
                    </Label>
                    <Select>
                        <SelectTrigger
                            id="urgency"
                            name="urgency"
                            className="flex hover:border-[#000] focus:border-[#000] items-center h-[55px] border-solid border border-gray-400 pt-[27px] pb-[27px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[16px] md:text-[16px] md:mb-[20px]"
                        >
                            <SelectValue placeholder="Якнайшвидше" />
                        </SelectTrigger>
                        <SelectContent>
                            {urgencies.map((urgency, id) => (
                                <SelectItem key={id} value={urgency}>
                                    {urgency}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Label
                        className="block font-normal text-[14px] leading-[171%] mb-[6px] md:text-[16px]"
                        htmlFor="category"
                    >
                        Яку допомогу ви хочете отримати?
                    </Label>
                    <Select>
                        <SelectTrigger
                            className="flex hover:border-[#000] focus:border-[#000] items-center h-[55px] border-solid border border-gray-400 py-[27px] px-3 rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[16px] md:text-[16px] md:mb-[20px]"
                            id="category"
                            name="category"
                        >
                            <SelectValue placeholder="Психологічна підтримка" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map(({ id, title }, index) => (
                                <SelectItem key={index} value={id}>
                                    {title}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Label
                        htmlFor="description"
                        className="block font-normal text-[14px] leading-[171%] mb-[6px] md:text-[16px]"
                    >
                        Яку допомогу ви хочете отримати?
                    </Label>
                    <Textarea
                        id="description"
                        placeholder="Опишіть вашу ситуацію тут…"
                        className="hover:border-[#000] focus:border-[#000] h-[170px] border-solid border border-gray-400 pt-[16px] pb-[16px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[20px] md:text-[16px] md:mb-[30px]"
                    />
                    <Button
                        type="submit"
                        className="rounded-md w-[100%] font-medium text-[14px] leading-[171%] text-[#fafafa] mb-[30px] h-[50px] flex justify-center items-center bg-black"
                    >
                        Надіслати запит
                    </Button>
                    <p className="font-normal text-[16px] leading-[150%] text-black mb-[20px] md:mb-[30px]">
                        Іноді через велику кількість заявок відповідь може
                        зайняти трохи часу, але ми завжди прагнемо зробити все
                        якісно
                    </p>
                </form>
            </div>
        </section>
    )
}
