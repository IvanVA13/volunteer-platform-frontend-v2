import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { routes } from '@/constants/routes.constants'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const closeMenu = () => setIsOpen(false)

    return (
        <header className="w-full border-b bg-white sticky top-0 z-50 px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="bg-yellow-200 font-bold text-2xl sm:text-3xl md:text-5xl text-black rounded-2xl px-3 py-1">
                    Razom
                </div>

                {/* Desktop nav */}
                <nav className="hidden md:flex gap-6 text-gray-700 text-sm md:text-base">
                    <Link to={routes.about} className="hover:text-black">
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

                {/* Desktop button */}
                <div className="hidden md:block">
                    <Button
                        asChild
                        className="bg-white hover:bg-yellow-300 rounded-2xl px-4 sm:px-6 text-black border border-black text-sm sm:text-base"
                    >
                        <Link to={routes.createRequest}>Допомогти</Link>
                    </Button>
                </div>

                {/* Mobile burger */}
                <button
                    className="md:hidden p-2 text-black"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
                        onClick={closeMenu}
                    />
                )}
            </AnimatePresence>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="absolute left-0 right-0 top-full md:hidden z-50 px-4"
                    >
                        <div className="flex flex-col gap-4 mt-4 bg-white rounded-2xl shadow-lg p-4 text-gray-700">
                            <Link to={routes.about} onClick={closeMenu}>
                                Про нас
                            </Link>
                            <Link to={routes.partners} onClick={closeMenu}>
                                Партнери
                            </Link>
                            <Link to={routes.supportUs} onClick={closeMenu}>
                                Підтримати нас
                            </Link>
                            <Link to={routes.contacts} onClick={closeMenu}>
                                Зворотній зв’язок
                            </Link>
                            <Button
                                asChild
                                className="bg-yellow-300 hover:bg-black hover:text-white rounded-2xl px-4 sm:px-6 text-black border border-black text-sm sm:text-base"
                            >
                                <Link
                                    to={routes.createRequest}
                                    onClick={closeMenu}
                                >
                                    Допомогти
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default function HomePage() {
    return (
        <div>
            <Header />

            {/* Hero */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center px-4 sm:px-6 lg:px-8 py-12">
                {/* Text */}
                <div className="text-center sm:text-left md:col-span-1">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                        Ваша допомога робить світ кращим
                    </h1>
                    <p className="text-gray-600 mb-6 text-sm sm:text-base">
                        Razom – команда, що об’єднує волонтерів, благодійні
                        організації та всіх небайдужих задля допомоги й розвитку
                        суспільства.
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
                            <Link to={routes.requests}>Потрібна допомога</Link>
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

                {/* Photo */}
                <div className="md:col-span-2">
                    <img
                        src="/img/home-page/hero-img.png"
                        alt="volunteers"
                        className="rounded-2xl shadow-md w-full h-auto object-cover max-h-[500px]"
                    />
                </div>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 text-center">
                {['users', 'heart-handshake', 'globe', 'clipboard-list'].map(
                    (icon, i) => (
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
                    )
                )}
            </section>

            {/* About */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-8 py-16 items-center">
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
                        <li className="flex items-start gap-3">
                            <svg className="w-6 h-6 mt-1">
                                <use href="/img/home-page/icons-sprite.svg#icon-Ellipse-1" />
                            </svg>
                            Ми — благодійна організація, яка щодня працює, щоб
                            допомагати тим, хто цього потребує
                        </li>
                        <li className="flex items-start gap-3">
                            <svg className="w-6 h-6 mt-1">
                                <use href="/img/home-page/icons-sprite.svg#icon-Ellipse-1" />
                            </svg>
                            Наша мета — робити життя людей легшим, підтримувати
                            їх у складних ситуаціях та надихати на нові
                            можливості
                        </li>
                        <li className="flex items-start gap-3">
                            <svg className="w-6 h-6 mt-1">
                                <use href="/img/home-page/icons-sprite.svg#icon-Ellipse-1" />
                            </svg>
                            Ми віримо, що кожна людина заслуговує на турботу,
                            увагу та шанс на щасливе життя
                        </li>
                        <li className="flex items-start gap-3">
                            <svg className="w-6 h-6 mt-1">
                                <use href="/img/home-page/icons-sprite.svg#icon-Ellipse-1" />
                            </svg>
                            Ми прагнемо створювати спільноту людей, які готові
                            допомагати і змінювати світ на краще
                        </li>
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
            </section>

            {/* Help Directions */}
            <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
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
                    {[
                        {
                            icon: 'home',
                            title: 'Дім та укриття',
                            text: 'Допомагаємо забезпечити безпечне та комфортне житло для тих, хто його потребує',
                        },
                        {
                            icon: 'heart',
                            title: 'Любов та підтримка',
                            text: 'Підтримуємо людей у складні моменти, надаючи турботу та увагу',
                        },
                        {
                            icon: 'food',
                            title: 'Їжа та продукти',
                            text: 'Забезпечуємо якісні продукти харчування для тих, хто цього потребує',
                        },
                        {
                            icon: 'nature',
                            title: 'Ми допомагаємо довкіллю',
                            text: 'Підтримуємо екологічні проєкти спрямовані на збереження природи та чистоти довкілля',
                        },
                        {
                            icon: 'education',
                            title: 'Освіта та розвиток',
                            text: 'Сприяємо доступу до якісної освіти для всіх людей, відкриваючи можливості для розвитку',
                        },
                        {
                            icon: 'medical',
                            title: 'Медична допомога',
                            text: 'Підтримуємо здоров’я людей, забезпечуючи необхідну медичну допомогу',
                        },
                    ].map((item, i) => (
                        <Card key={i} className="rounded-2xl shadow-sm">
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
            </section>
        </div>
    )
}
