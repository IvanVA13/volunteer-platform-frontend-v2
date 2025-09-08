import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import Navigation from '@/components/ui/Navigation'
import { Button } from './button'
import { NavLink } from 'react-router-dom'
import { routes } from '@/constants/routes.constants'
import Container from './Container'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full bg-white">
            <Container>
                <div className="flex flex-col md:flex-row">
                    <div className="flex justify-between items-center mb-5 py-3 md:m-0 md:p-0">
                        {!isOpen ? (
                            <NavLink
                                className="md:flex px-3 md:px-4 py-1.5 md:py-2 bg-yellow-200 font-bold text-3xl leading-8 lg:text-5xl lg:leading-12 rounded-[50px]"
                                to={routes.home}
                            >
                                Razom
                            </NavLink>
                        ) : (
                            <span className="block px-2.5 font-semibold text-3xl leading-[1.733]">
                                Меню
                            </span>
                        )}
                        <Button
                            variant="ghost"
                            className="md:hidden size-10"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <X className="size-6" />
                            ) : (
                                <Menu className="size-6" />
                            )}
                        </Button>
                    </div>
                    <div
                        className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col-reverse md:flex-row md:justify-end md:items-center md:gap-x-4 lg:gap-x-14 w-full`}
                    >
                        <Navigation />
                        <NavLink
                            className="md:hidden mb-12 py-3 w-full leading-6 text-center rounded-sm bg-yellow-300"
                            to={routes.createRequest}
                        >
                            Кабінет
                        </NavLink>
                        <NavLink
                            className="mb-2.5 md:mb-0 p-3 w-full md:w-auto lg:w-48 leading-6 text-center rounded-sm border-1 border-black hover:bg-yellow-300"
                            to={routes.createRequest}
                        >
                            Допомогти
                        </NavLink>
                    </div>
                </div>
            </Container>
        </header>
    )
}
