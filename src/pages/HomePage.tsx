import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { routes } from '@/constants/routes.constants'
import { about, achievement, support } from '@/constants/home.constants'
import Container from '@/components/ui/Container'

import avatars from '@/assets/images/avatars.png'
import hero from '@/assets/images/hero-img.png'
import whoWe from '@/assets/images/who-we.png'

export default function HomePage() {
    return (
        <main>
            <section className="py-12">
                <Container className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-center">
                    <div className="flex flex-col gap-y-5 md:gap-[50px] text-center sm:text-left xl:col-span-5">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                            Ваша допомога робить світ кращим
                        </h1>
                        <p className="font-semibold text-gray-600 text-sm sm:text-lg">
                            Razom – команда, що об’єднує волонтерів, благодійні
                            організації та всіх небайдужих задля допомоги й
                            розвитку суспільства.
                        </p>
                        <div>
                            <img
                                src={avatars}
                                alt="helping hands"
                                className="rounded-2xl mb-2 object-cover mx-auto sm:mx-0 max-w-[200px] sm:max-w-[250px]"
                            />
                            <p className="text-gray-600 text-sm sm:text-base">
                                100 000+ людей вже допомогли
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                            <Button
                                asChild
                                className="h-auto py-3 px-4 sm:px-11 text-white hover:text-black bg-black hover:bg-yellow-300 rounded-sm"
                            >
                                <Link to={routes.register}>
                                    Потрібна допомога
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="h-auto py-3 px-4 sm:px-11 hover:text-white
                             bg-yellow-300 hover:bg-black rounded-sm"
                            >
                                <Link to={routes.requests}>Хочу допомогти</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="xl:col-span-7">
                        <img
                            src={hero}
                            alt="volunteers"
                            className="rounded-2xl shadow-md w-full h-auto object-cover max-h-[500px]"
                        />
                    </div>
                </Container>
            </section>

            <section className="py-12 bg-gray-50 text-center">
                <Container className="grid grid-cols-2 xl:grid-cols-4 gap-4 items-center">
                    {achievement.map(
                        ({ icon: Icon, title, description }, i) => (
                            <div
                                key={i}
                                className="flex flex-col xl:flex-row items-center gap-2 justify-center lg:justify-start py-3"
                            >
                                <div
                                    className="
                            relative
                            inline-block
                            shrink-0
                            before:content-['']
                            before:block
                            before:absolute
                            before:size-14 md:before:size-16
                            before:bg-yellow-200
                            before:rounded-full
                            before:top-[-14px]
                            before:left-[-14px]
                        "
                                >
                                    <Icon
                                        className="relative size-14 md:size-16 z-1"
                                        strokeWidth="1"
                                    />
                                </div>
                                <div className="text-center xl:text-left">
                                    <p className="font-semibold text-xl md:text-3xl mb-2">
                                        {title}
                                    </p>
                                    <p className="text-gray-600 text-sm md:text-base">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        )
                    )}
                </Container>
            </section>

            <section className="py-16">
                <Container className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <img
                        src={whoWe}
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
                        <div className="flex flex-col sm:flex-row md:justify-center gap-4 mt-6">
                            <Button
                                asChild
                                className="h-auto py-3 px-4 sm:px-6 text-white bg-black hover:bg-yellow-300 hover:text-black rounded-sm"
                            >
                                <Link to={routes.about}>Дізнатись більше</Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="h-auto py-3 px-4 sm:px-6 text-black border bg-white hover:bg-yellow-300 border-black rounded-sm"
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
                            className="h-auto py-3 px-4 sm:px-6 rounded-sm bg-yellow-300 text-black hover:bg-black hover:text-white"
                        >
                            <Link to={routes.requests}>Потрібна допомога</Link>
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {support.map(({ icon: Icon, title, text }, index) => (
                            <Card key={index} className="rounded-xl shadow-sm">
                                <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
                                    <div className="mb-4 md:mb-6 p-[12.5px] md:p-[30px] bg-yellow-200 rounded-full">
                                        <Icon
                                            className="size-[70px] md:size-[90px]"
                                            strokeWidth="1"
                                        />
                                    </div>
                                    <h3 className="mb-2 md:mb-4 font-semibold text-2xl">
                                        {title}
                                    </h3>
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        {text}
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
