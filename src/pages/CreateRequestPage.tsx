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
import { useCreateRequestMutation } from '@/services/api'
import { useNavigate } from 'react-router-dom'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import type { ReqCreateRequest } from '@/types/requests.types'
import { routes } from '@/constants/routes.constants'

export default function SupportUsPage() {
    const [loginUser, { isLoading, isError, error }] =
        useCreateRequestMutation()
    const navigate = useNavigate()
    const [formData, setFormData] = useState<ReqCreateRequest>({
        title: '',
        description: '',
        category: 'FOOD',
        city: '',
    })

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleCategoryChange = (category: ReqCreateRequest['category']) => {
        setFormData((prev) => ({
            ...prev,
            category,
        }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            await loginUser(formData).unwrap()
            navigate(routes.myRequests)
        } catch (err) {
            console.error('Помилка створення запиту:', err)
        }
    }
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
                <form onSubmit={handleSubmit}>
                    <Label
                        htmlFor="name"
                        className="block font-normal text-[14px] leading-[171%] mb-[6px] md:text-[20px]"
                    >
                        Як до Вас звертатися?
                    </Label>
                    <div>
                        <Input
                            className="h-auto hover:border-[#000] focus:border-[#000] border-solid border border-gray-400 pt-[16px] pb-[16px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[16px] md:text-[16px] md:mb-[20px]"
                            placeholder="Богдана"
                            id="title"
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
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
                            className="flex hover:border-[#000] focus:border-[#000] items-center h-[55px] border-solid border border-gray-400 pt-[27px] pb-[27px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[16px] md:text-[16px] md:mb-[20px]"
                            id="region"
                            name="region"
                        >
                            <SelectValue placeholder={regions[0]} />
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
                            className="h-auto hover:border-[#000] focus:border-[#000] border-solid border border-gray-400 pt-[16px] pb-[16px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[16px] md:text-[16px] md:mb-[20px]"
                            placeholder="м.Київ, Печерский район"
                            id="city"
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
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
                            <SelectValue placeholder={urgencies[0]} />
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
                    <Select
                        value={formData.category}
                        onValueChange={handleCategoryChange}
                    >
                        <SelectTrigger
                            className="flex hover:border-[#000] focus:border-[#000] items-center h-[55px] border-solid border border-gray-400 py-[27px] px-3 rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[16px] md:text-[16px] md:mb-[20px]"
                            id="category"
                            name="category"
                        >
                            <SelectValue placeholder={categories[0].title} />
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
                        className="hover:border-[#000] focus:border-[#000] h-[170px] border-solid border border-gray-400 pt-[16px] pb-[16px] pl-[12px] pr-[12px] rounded-md w-[100%] font-normal leading-[171%] text-[#a8a29e] text-[14px] mb-[20px] md:text-[16px] md:mb-[30px]"
                        id="description"
                        name="description"
                        placeholder="Опишіть вашу ситуацію тут…"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    {isError && (
                        <div className="text-red-600">
                            {'data' in error && 'Сталася помилка'}
                        </div>
                    )}
                    <Button
                        type="submit"
                        className="rounded-md w-[100%] font-medium text-[14px] leading-[171%] text-[#fafafa] mb-[30px] h-[50px] flex justify-center items-center bg-black"
                    >
                        {isLoading ? 'Надсилаємо...' : 'Надіслати запит'}
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
