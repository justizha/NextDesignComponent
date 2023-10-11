"use client";

import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

export default function NavBar() {
    const [toggle, setToggle] = useState(false);
    const [closeMenu, setCloseMenu] = useState(false);
    const navRef = useRef(null)
    const menu = "menu.svg"
    const close = "close.svg"
    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setCloseMenu(true)
                setTimeout(() => setToggle(false), 300);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])
    return (
        <nav className='w-full h-16 border-b flex justify-between border-gray-700 fixed z-50 bg-main-black '
            ref={navRef}>
            <ul className="flex items-center gap-8">
                <li>
                    <Link href={'/'} className='font-black text-[32px] ml-3 cursor-pointer'>
                        NexT
                    </Link>
                </li>
                <li className="md:flex hidden">
                    <Link href={'/underdev'} className="text-gray-400 hover:text-gray-200 duration-150 font-semibold text-lg">
                        Design
                    </Link>
                </li>
                <li className="md:flex hidden">
                    <Link href={'/underdev'} className="text-gray-400 hover:text-gray-200 duration-150 font-semibold text-lg">
                        Docs
                    </Link>
                </li>
            </ul>
            <ul className=' flex-row gap-8 mx-4 md:flex hidden items-center'>
                <li className='font-semibold text-lg'>
                    <Link href={'/about'} className="text-gray-400 hover:text-gray-200 duration-150">
                        About
                    </Link>
                </li>
                <li className='font-semibold text-lg'>
                    <Link href={'/underdev'} className="text-gray-400 hover:text-gray-200 duration-150">
                        Contact
                    </Link>
                </li>
                <li className='font-semibold text-lg'>
                    <a className="p-1 border-gray-300 border rounded flex items-center gap-1 cursor-pointer" href="https://github.com/justizha/NextDesignComponent" target="_blank">
                        <img src="/images/github-mark-white.png" alt="github-logo" className="w-5 h-5 object-contain" />
                        Github
                    </a>
                </li>
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center mx-4">
                <Menu as='div'>
                    <div className="grid place-items-center ">
                        <Menu.Button className='flex items-center justify-center h-10 w-10'>
                            <img
                                src={toggle ? close : menu}
                                alt="menu"
                                className={`w-[35px] cursor-pointer transition-opacity duration 700 p-2  mt-3 bg-gray-500 bg-opacity-50 dark: bg-transparent ${toggle ? 'opacity-100' : 'opacity-70'
                                    } `}
                                onClick={() => setToggle(!toggle)}
                            />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter='transition ease-out duration-400'
                        enterFrom='transform opacity-0 -translate-x-full'
                        enterTo='transform opacity-100 -translate-x-0'
                        leave='transition ease-in duration-300'
                        leaveFrom='transform opacity-100 -translate-x-0 '
                        leaveTo='transform opacity-0 -translate-x-full'>
                        <Menu.Items className='absolute left-0 top-16  border-gray-600  w-[60%] h-screen origin-top-right  bg-main-black z-50 border-r py-4'>
                            <ul className="list-none mx-2 text-start grid mt-14 gap-4">
                                <li className='font-semibold text-lg'>
                                    <Link href={'/about'} className="text-gray-400 hover:text-gray-200 duration-150">
                                        About
                                    </Link>
                                </li>
                                <li className='font-semibold text-lg'>
                                    <Link href={'/underdev'} className="text-gray-400 hover:text-gray-200 duration-150">
                                        Contact
                                    </Link>
                                </li>
                                <li className='font-semibold text-lg'>
                                    <a className="p-1 border-gray-300 w-32 border rounded flex items-center gap-1 cursor-pointer" href="https://github.com/justizha/NextDesignComponent" target="_blank">
                                        <img src="/images/github-mark-white.png" alt="github-logo" className="w-5 h-5 object-contain" />
                                        Github
                                    </a>
                                </li>
                            </ul>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </nav >
    )
}