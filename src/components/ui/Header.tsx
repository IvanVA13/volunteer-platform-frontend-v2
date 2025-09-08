import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import Navigation from '@/components/ui/Navigation'
import { Button } from './button'
import { Link, NavLink } from 'react-router-dom'
import { routes } from '@/constants/routes.constants'
import { navigation } from '@/constants/nav.constants'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="w-full border-b bg-white sticky top-0 z-50 px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex justify-between items-center">
                <NavLink
                    className="bg-yellow-200 font-bold text-2xl sm:text-3xl md:text-5xl text-black rounded-[50px] px-4 py-2"
                    to={routes.home}
                >
                    Razom
                </NavLink>
                <Navigation />

                <div className="hidden md:block">
                    <Button
                        variant="outline"
                        asChild
                        className="flex px-16 py-4.5 hover:bg-yellow-300 text-black leading-6"
                    >
                        <Link className="block" to={routes.createRequest}>
                            Допомогти
                        </Link>
                    </Button>
                </div>

                <button
                    className="md:hidden p-2 text-black"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
                        onClick={() => {
                            setIsOpen(!isOpen)
                        }}
                    />
                )}
            </AnimatePresence>

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
                            {navigation.map(({ title, route }, id) => (
                                <Link
                                    key={id}
                                    to={route}
                                    onClick={() => {
                                        setIsOpen(!isOpen)
                                    }}
                                >
                                    {title}
                                </Link>
                            ))}
                            <Button
                                asChild
                                className="bg-yellow-300 hover:bg-black hover:text-white rounded-2xl px-4 sm:px-6 text-black border border-black text-sm sm:text-base"
                            >
                                <Link
                                    to={routes.createRequest}
                                    onClick={() => {
                                        setIsOpen(!isOpen)
                                    }}
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
