import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { routes } from '@/constants/routes.constants'
import { about, support } from '@/constants/home.constants'
import Container from '@/components/ui/Container'

export default function HomePage() {
    return (
        <main>
            <section className="py-12">
                <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center">
                    <div className="text-center sm:text-left md:col-span-1">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                            Ваша допомога робить світ кращим
                        </h1>
                        <p className="text-gray-600 mb-6 text-sm sm:text-base">
                            Razom – команда, що об’єднує волонтерів, благодійні
                            організації та всіх небайдужих задля допомоги й
                            розвитку суспільства.
                        </p>
                        <img
                            src="/img/home-page/avatars.png"
                            alt="helping hands"
                            className="rounded-2xl mb-2 object-cover mx-auto sm:mx-0 max-w-[200px] sm:max-w-[250px]"
                        />
                        <p className="text-gray-600 mb-6 text-sm sm:text-base">
                            100 000+ людей вже допомогли
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                            <Button
                                asChild
                                className="bg-black text-white rounded-lg px-4 sm:px-6 hover:bg-yellow-300 hover:text-black"
                            >
                                <Link to={routes.requests}>
                                    Потрібна допомога
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="rounded-lg px-4 sm:px-6 bg-yellow-300 hover:bg-black hover:text-white"
                            >
                                <Link to={routes.register}>Хочу допомогти</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <img
                            src="/img/home-page/hero-img.png"
                            alt="volunteers"
                            className="rounded-2xl shadow-md w-full h-auto object-cover max-h-[500px]"
                        />
                    </div>
                </Container>
            </section>

            <section className="py-12 bg-gray-50 text-center">
                <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center">
                    {[
                        'users',
                        'heart-handshake',
                        'globe',
                        'clipboard-list',
                    ].map((icon, i) => (
                        <div
                            key={i}
                            className="flex flex-row items-center gap-5 justify-center sm:justify-start"
                        >
                            <svg className="w-10 h-10">
                                <use
                                    href={`/img/home-page/icons-sprite.svg#icon-${icon}`}
                                />
                            </svg>
                            <div className="text-left">
                                <p className="font-semibold text-lg">
                                    1 000 000+
                                </p>
                                <p className="text-gray-600 text-sm">
                                    Людей отримали допомогу
                                </p>
                            </div>
                        </div>
                    ))}
                </Container>
            </section>

            <section className="py-16">
                <Container className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <img
                        src="/img/home-page/who-we.png"
                        alt="helping hands"
                        className="rounded-2xl shadow-md w-full h-auto object-cover"
                    />
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            Хто ми
                        </h2>
                        <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                            {about.map(({ description }, id) => (
                                <li
                                    key={id}
                                    className="flex items-center gap-5"
                                >
                                    <span className="before:block before:size-5 before:rounded-full before:bg-yellow-300" />
                                    {description}
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <Button
                                asChild
                                className="bg-black text-white rounded-lg px-4 sm:px-6 hover:bg-yellow-300 hover:text-black"
                            >
                                <Link to={routes.about}>Дізнатись більше</Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="bg-white hover:bg-yellow-300 rounded-2xl px-4 sm:px-6 text-black border border-black"
                            >
                                <Link to={routes.register}>Приєднатись</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-16 bg-gray-50">
                <Container>
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
                            Напрямки нашої допомоги
                        </h2>
                        <Button
                            asChild
                            className="bg-yellow-300 text-black hover:bg-black hover:text-white rounded-2xl px-4 sm:px-6"
                        >
                            <Link to={routes.requests}>Потрібна допомога</Link>
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {support.map((item, index) => (
                            <Card key={index} className="rounded-2xl shadow-sm">
                                <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
                                    <svg className="w-20 sm:w-24 h-20 sm:h-24 mb-3">
                                        <use
                                            href={`/img/home-page/icons-sprite.svg#icon-${item.icon}`}
                                        />
                                    </svg>
                                    <h3 className="font-semibold text-lg mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        {item.text}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    )
}
