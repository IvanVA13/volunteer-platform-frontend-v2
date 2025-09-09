import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'

import { Textarea } from '@/components/ui/textarea'
export default function SupportUsPage() {
    return (
        <section className="pt-[20px] pb-[20px] md:pt-[60px] md:pb-[60px] xl:pt-[80px] xl:pb-[80px]">
            <div className="pl-[10px] pr-[10px] ml-auto mr-auto max-w-[450px] md:max-w-[600px] xl:max-w-[690px]">
                <h2 className="font-family font-extrabold text-[28px] leading-[100%] tracking-[-0.01em] text-black mb-[16px] text-center md:text-[48px] md:mb-[16px]">
                    Створення вашої заявки
                </h2>
                <p className="font-family font-normal text-[16px] leading-[150%] text-black mb-[20px] md:mb-[30px] text-center md:mb-[56px] ">
                    Розкажіть нам, яка саме допомога вам потрібна. Після цього
                    волонтер отримає вашу заявку і зможе з вами зв’язатися
                </p>
                <form>
                    <label
                        htmlFor="userName"
                        className="font-family block font-normal text-[14px] leading-[171%] mb-[6px] md:text-[20px]"
                    >
                        Як до Вас звертатися?
                    </label>
                    <div className="">
                        <input
                            className="font-family border-solid border border-gray-400 pt-[16px] pb-[16px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[16px] md:text-[16px] md:mb-[20px]"
                            placeholder="Богдана"
                            id="userName"
                            type="text"
                            name="userName"
                            required
                        />
                    </div>
                    <label
                        htmlFor="region"
                        className="font-family block font-normal text-[14px] leading-[171%] mb-[6px] md:text-[20px]"
                    >
                        Де ви знаходитесь? (область)
                    </label>
                    <Select>
                        <SelectTrigger
                            id="region"
                            className="flex items-center h-[55px] font-family border-solid border border-gray-400 pt-[27px] pb-[27px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[16px] md:text-[16px] md:mb-[20px]"
                        >
                            <SelectValue placeholder="Київська область" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">
                                {' '}
                                Вінницька область
                            </SelectItem>
                            <SelectItem value="dark">
                                Волинська область
                            </SelectItem>
                            <SelectItem value="system">
                                Дніпропетровська область
                            </SelectItem>
                            <SelectItem value="system">
                                Житомирська область
                            </SelectItem>
                            <SelectItem value="system">
                                Закарпатська область
                            </SelectItem>
                            <SelectItem value="system">
                                Запорізька область
                            </SelectItem>
                            <SelectItem value="system">
                                Івано-Франківська область
                            </SelectItem>
                            <SelectItem value="system">
                                Київська область
                            </SelectItem>
                            <SelectItem value="system">
                                Кіровоградська область
                            </SelectItem>
                            <SelectItem value="system">
                                Львівська область
                            </SelectItem>
                            <SelectItem value="system">
                                Миколаївська область
                            </SelectItem>
                            <SelectItem value="system">
                                Одеська область
                            </SelectItem>
                            <SelectItem value="system">
                                Полтавська область
                            </SelectItem>
                            <SelectItem value="system">
                                Рівненська область
                            </SelectItem>
                            <SelectItem value="system">
                                Сумська область
                            </SelectItem>
                            <SelectItem value="system">
                                Тернопільська область
                            </SelectItem>
                            <SelectItem value="system">
                                Харківська область
                            </SelectItem>
                            <SelectItem value="system">
                                Херсонська область
                            </SelectItem>
                            <SelectItem value="system">
                                Хмельницька область
                            </SelectItem>
                            <SelectItem value="system">
                                Черкаська область
                            </SelectItem>
                            <SelectItem value="system">
                                Чернівецька область
                            </SelectItem>
                            <SelectItem value="system">
                                Чернігівська область
                            </SelectItem>
                        </SelectContent>
                    </Select>

                    <label
                        htmlFor="city"
                        className="font-family block font-normal text-[14px] leading-[171%] mb-[6px] md:text-[16px]"
                    >
                        Місто, район
                    </label>
                    <div className="">
                        <input
                            className="font-family border-solid border border-gray-400 pt-[16px] pb-[16px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[16px] md:text-[16px] md:mb-[20px]"
                            placeholder="м.Київ, Печерский район"
                            id="city"
                            type="text"
                            name="userName"
                            required
                        />
                    </div>
                    <label
                        htmlFor="urgency"
                        className="font-family block font-normal text-[14px] leading-[171%] mb-[6px] md:text-[20px]"
                    >
                        Терміновість
                    </label>
                    <Select>
                        <SelectTrigger
                            id="urgency"
                            className="flex items-center h-[55px] font-family border-solid border border-gray-400 pt-[27px] pb-[27px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[16px] md:text-[16px] md:mb-[20px]"
                        >
                            <SelectValue placeholder="Якнайшвидше" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Якнайшвидше</SelectItem>
                            <SelectItem value="light">Сьогодні</SelectItem>
                            <SelectItem value="light">
                                Протягом тижня
                            </SelectItem>
                            <SelectItem value="light">Не терміново</SelectItem>
                        </SelectContent>
                    </Select>

                    <label
                        htmlFor="help"
                        className="font-family block font-normal text-[14px] leading-[171%] mb-[6px] md:text-[16px]"
                    >
                        Яку допомогу ви хочете отримати?
                    </label>
                    <Select>
                        <SelectTrigger
                            id="help"
                            className="flex items-center h-[55px] font-family border-solid border border-gray-400 pt-[27px] pb-[27px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[16px] md:text-[16px] md:mb-[20px]"
                        >
                            <SelectValue placeholder="Психологічна підтримка" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">
                                Психологічна підтримка
                            </SelectItem>
                            <SelectItem value="light">
                                Дім та укриття
                            </SelectItem>
                            <SelectItem value="light">
                                {' '}
                                Їжа та продукти
                            </SelectItem>
                            <SelectItem value="light">
                                {' '}
                                Медична допомога{' '}
                            </SelectItem>
                            <SelectItem value="light">
                                {' '}
                                Освіта та розвиток
                            </SelectItem>
                            <SelectItem value="light"> Інше</SelectItem>
                        </SelectContent>
                    </Select>

                    <label
                        htmlFor="situation"
                        className="font-family block font-normal text-[14px] leading-[171%] mb-[6px] md:text-[16px]"
                    >
                        Яку допомогу ви хочете отримати?
                    </label>
                    <Textarea
                        id="situation"
                        placeholder="Опишіть вашу ситуацію тут…"
                        className="font-family h-[170px] border-solid border border-gray-400 pt-[16px] pb-[16px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[20px] md:text-[16px] md:mb-[20px] md:mb-[30px]"
                    />
                    <Button
                        type="submit"
                        className="font-family rounded-md w-[100%] font-medium text-[14px] leading-[171%] text-[#fafafa] mb-[30px] h-[50px] flex justify-center items-center bg-black"
                    >
                        Надіслати запит
                    </Button>
                    <p className="font-family font-normal text-[16px] leading-[150%] text-black mb-[20px] md:mb-[30px] ">
                        Іноді через велику кількість заявок відповідь може
                        зайняти трохи часу, але ми завжди прагнемо зробити все
                        якісно
                    </p>
                </form>
            </div>
        </section>
    )
}
