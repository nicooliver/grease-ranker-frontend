"use client";

import {useState} from 'react'
import Image from 'next/image'
import {Dialog} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link';

const navigation = [
    {name: 'McDonald\'s', href: '/mc-donalds'},
    {name: 'Burger King', href: '/burger-king'},
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="sticky bg-white shadow absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-4 lg:px-8 mx-auto max-w-7xl" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Grease Ranker</span>
                        <Image
                            className="h-8 w-auto"
                            src="/logo.png"
                            alt=""
                            width={50}
                            height={50}
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href}
                              className="text-sm font-semibold leading-6 text-gray-900">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <select
                        id="location"
                        name="location"
                        className="block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue="Österreich"
                    >
                        <option>Österreich</option>
                        <option>Deutschland</option>
                        <option>Japan</option>
                    </select>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50"/>
                <Dialog.Panel
                    className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=600"
                                alt=""
                                width={50}
                                height={50}
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <select
                                    id="location"
                                    name="location"
                                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue="Österreich"
                                >
                                    <option>Österreich</option>
                                    <option>Deutschland</option>
                                    <option>Japan</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}


// "use client";
//
// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import { PlusIcon } from '@heroicons/react/20/solid'
//
// function classNames(...classes: any[]) {
//     return classes.filter(Boolean).join(' ')
// }
//
// export default function Navbar() {
//     return (
//         <Disclosure as="nav" className="sticky bg-white shadow">
//             {({ open }) => (
//                 <>
//                     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//                         <div className="flex h-16 justify-between">
//                             <div className="flex">
//                                 <div className="-ml-2 mr-2 flex items-center md:hidden">
//                                     {/* Mobile menu button */}
//                                     <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//                                         <span className="sr-only">Open main menu</span>
//                                         {open ? (
//                                             <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                                         ) : (
//                                             <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                                         )}
//                                     </Disclosure.Button>
//                                 </div>
//                                 <div className="flex flex-shrink-0 items-center">
//                                     <img
//                                         className="block h-8 w-auto lg:hidden"
//                                         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                                         alt="Your Company"
//                                     />
//                                     <img
//                                         className="hidden h-8 w-auto lg:block"
//                                         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                                         alt="Your Company"
//                                     />
//                                 </div>
//                                 <div className="hidden md:ml-6 md:flex md:space-x-8">
//                                     {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
//                                     <a
//                                         href="#"
//                                         className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
//                                     >
//                                         McDonald&apos;s
//                                     </a>
//                                     <a
//                                         href="#"
//                                         className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
//                                     >
//                                         Burger King
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className="flex items-center">
//                                 <div className="flex-shrink-0">
//                                     <select
//                                         id="location"
//                                         name="location"
//                                         className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                         defaultValue="Österreich"
//                                     >
//                                         <option>Österreich</option>
//                                         <option>Deutschland</option>
//                                         <option>Japan</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//
//                     <Disclosure.Panel className="md:hidden">
//                         <div className="space-y-1 pb-3 pt-2">
//                             {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
//                             <Disclosure.Button
//                                 as="a"
//                                 href="#"
//                                 className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 sm:pl-5 sm:pr-6"
//                             >
//                                 McDonald&apos;s
//                             </Disclosure.Button>
//                             <Disclosure.Button
//                                 as="a"
//                                 href="#"
//                                 className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
//                             >
//                                 Burger King
//                             </Disclosure.Button>
//                         </div>
//                     </Disclosure.Panel>
//                 </>
//             )}
//         </Disclosure>
//     )
// }
