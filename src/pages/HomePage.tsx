import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
    Heart,
    Home,
    Users,
    GraduationCap,
    Stethoscope,
    Smile,
} from 'lucide-react'
import { routes } from '@/constants/routes.constants'

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col max-w-[1320px] mr-auto ml-auto">
            {/* Header */}
            <header className="w-full flex justify-between items-center  border-b bg-white sticky top-0 z-50 ">
                <div className="bg-yellow-200 font-bold text-5xl text-black-600 rounded-3xl pl-4 pr-4 pt-1 pb-2 ">
                    Razom
                </div>
                <nav className=" md:flex gap-6 text-gray-700 ">
                    <Link
                        to={routes.about}
                        className="font-normal hover:text-black"
                    >
                        Про нас
                    </Link>
                    <Link to={routes.partners} className="hover:text-black">
                        Партнери
                    </Link>
                    <Link to={routes.supportUs} className="hover:text-black">
                        Підтримати нас
                    </Link>
                    <Link to={routes.contacts} className="hover:text-black">
                        Зворотній зв’язок
                    </Link>
                </nav>
                <Button
                    asChild
                    className="bg-white-400 hover:bg-yellow-300 rounded-2xl px-6 text-black border-solid border-black border-2"
                >
                    <Link to={routes.createRequest}>Допомогти</Link>
                </Button>
            </header>

            {/* Hero */}
            <section className="grid md:grid-cols-3 gap-8 items-center mr-auto ml-auto max-w-330 max-h-[500px]">
                {/* Текст — 1/3 */}
                <div className="md:col-span-1">
                    <h1 className="text-4xl font-bold mb-12.5">
                        Ваша допомога робить світ кращим
                    </h1>
                    <p className="text-gray-600 mb-12.5">
                        Разом – команда, що об’єднує волонтерів, благодійні
                        організації та всіх небайдужих задля допомоги й розвитку
                        суспільства.
                    </p>
                    <div className="flex gap-4">
                        <Button
                            asChild
                            className="bg-black text-white rounded-lg px-6 hover:bg-yellow-300 hover:text-black"
                        >
                            <Link to={routes.requests}>Потрібна допомога</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="rounded-lg px-6 bg-yellow-300 hover:bg-black hover:text-white"
                        >
                            <Link to={routes.register}>Хочу допомогти</Link>
                        </Button>
                    </div>
                </div>

                {/* Фото — 2/3 */}
                <div className="md:col-span-2 max-h-[500px]">
                    <img
                        src="/img/home-page/hero-img.png"
                        alt="volunteers"
                        className="rounded-2xl shadow-md w-full object-cover"
                    />
                </div>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 py-12 bg-gray-50 text-center">
                <div>
                    <div className="text-2xl font-bold">1 000 000+</div>
                    <p className="text-gray-600">Людей отримали допомогу</p>
                </div>
                <div>
                    <div className="text-2xl font-bold">500+</div>
                    <p className="text-gray-600">Волонтерських ініціатив</p>
                </div>
                <div>
                    <div className="text-2xl font-bold">200+</div>
                    <p className="text-gray-600">Партнерських організацій</p>
                </div>
                <div>
                    <div className="text-2xl font-bold">100%</div>
                    <p className="text-gray-600">Прозорість і звіти</p>
                </div>
            </section>

            {/* About */}
            <section className="grid md:grid-cols-2 gap-8 px-8 py-16 items-center">
                <img
                    src="/img/home-page/who-we.png"
                    alt="helping hands"
                    className="rounded-2xl shadow-md max-h-95 object-cover"
                />
                <div>
                    <h2 className="text-3xl font-bold mb-4">Хто ми</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li>
                            ✅ Ми – волонтерська спільнота, яка об’єднує людей
                            заради добра.
                        </li>
                        <li>
                            ✅ Надаємо допомогу постраждалим та тим, хто її
                            потребує.
                        </li>
                        <li>
                            ✅ Підтримуємо освіту, медицину та розвиток громад.
                        </li>
                    </ul>
                    <div className="flex gap-4 mt-6">
                        <Button
                            asChild
                            className="bg-black text-white rounded-2xl px-6"
                        >
                            <Link to={routes.about}>Дізнатись більше</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="rounded-2xl px-6"
                        >
                            <Link to={routes.register}>Приєднатись</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Help Directions */}
            <section className="px-8 py-16 bg-gray-50">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold">
                        Напрямки нашої допомоги
                    </h2>
                    <Button
                        asChild
                        className="bg-yellow-400 hover:bg-yellow-500 rounded-2xl px-6"
                    >
                        <Link to={routes.requests}>Усі проєкти</Link>
                    </Button>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="rounded-2xl shadow-sm">
                        <CardContent className="p-6 text-center">
                            <Home className="mx-auto h-10 w-10 text-yellow-500 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">
                                Дім та укриття
                            </h3>
                            <p className="text-gray-600">
                                Забезпечуємо житлом і захистом тих, хто його
                                потребує.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl shadow-sm">
                        <CardContent className="p-6 text-center">
                            <Heart className="mx-auto h-10 w-10 text-yellow-500 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">
                                Любов та підтримка
                            </h3>
                            <p className="text-gray-600">
                                Ми завжди поряд із тими, хто переживає складні
                                часи.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl shadow-sm">
                        <CardContent className="p-6 text-center">
                            <Smile className="mx-auto h-10 w-10 text-yellow-500 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">
                                Тепло та радість
                            </h3>
                            <p className="text-gray-600">
                                Даруємо надію та світлі моменти тим, хто цього
                                потребує.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl shadow-sm">
                        <CardContent className="p-6 text-center">
                            <Users className="mx-auto h-10 w-10 text-yellow-500 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">
                                Ми допоможемо разом
                            </h3>
                            <p className="text-gray-600">
                                Об’єднуємо зусилля людей та організацій для
                                більшого впливу.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl shadow-sm">
                        <CardContent className="p-6 text-center">
                            <GraduationCap className="mx-auto h-10 w-10 text-yellow-500 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">
                                Освіта та розвиток
                            </h3>
                            <p className="text-gray-600">
                                Інвестуємо в майбутнє через навчання та
                                розвиток.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl shadow-sm">
                        <CardContent className="p-6 text-center">
                            <Stethoscope className="mx-auto h-10 w-10 text-yellow-500 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">
                                Медична допомога
                            </h3>
                            <p className="text-gray-600">
                                Забезпечуємо доступ до якісної медицини та
                                підтримки.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}
