'use client'

import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { MdHome } from "react-icons/md";
import { useState } from 'react';
import { useAtomValue } from 'jotai';
import { isLoginAtom } from '@/isLogin';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isLogin = useAtomValue(isLoginAtom);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className='sticky top-0 left-0 w-full bg-zinc-500 border-b border-zinc-400 text-gray-100 shadow py-1 px-1 z-30'>
                <nav className='flex items-center justify-between h-16 px-13'>
                    <div >
                        <Link href='/' className='font-bold text-2xl mx-1 flex flex-row items-center justify-center select-none'>
                        KGT Next.js
                        </Link>
                    </div>
                    <div >
                        { !isLogin && 
                        <div className='flex items-center'>
                            <Link href='/login' >
                                <button className='text-md flex flex-row justify-center items-center hover:cursor-pointer hover:bg-white hover:text-yellow-500 rounded-md p-1 m-2 text-white hover:font-bold'>
                                    <LuLogIn /><p>&nbsp;Login</p>
                                </button>
                            </Link>
                            <Link href= '/'>
                                <button className='text-3xl flex flex-row justify-center items-center hover:cursor-pointer hover:bg-white hover:text-black rounded-md p-1 m-2 text-white hover:font-bold'>
                                    <MdHome />
                                </button>
                            </Link>
                        </div>
                        }
                        { isLogin &&
                        <div className='flex items-center'>
                            <Link href='/login' >
                                <button className='text-md flex flex-row justify-center items-center hover:cursor-pointer hover:bg-white hover:text-yellow-500 rounded-md p-1 m-2 text-white hover:font-bold'>
                                    <LuLogOut /><p>&nbsp;Logout</p>
                                </button>
                            </Link>
                            <button onClick={toggleMenu} className='text-3xl flex flex-row justify-center items-center hover:cursor-pointer hover:bg-white hover:text-black rounded-md p-1 m-2 text-white hover:font-bold'>
                                <FaBars />
                            </button>
                        </div>
                        }
                    </div>
                </nav>
            </header>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-gray-200 bg-opacity-30 backdrop-blur-sm z-40"
                    onClick={toggleMenu}
                ></div>
            )}

            {/* Sidebar Menu */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-zinc-800 shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
                <div className='flex justify-end items-center p-5'>
                    <button onClick={toggleMenu} className='text-4xl text-gray-100 hover:cursor-pointer  hover:bg-white rounded-md hover:text-black'>
                        <FaTimes />
                    </button>
                </div>
                <ul className='flex flex-col items-center w-full text-gray-100'>
                    <Link href='/' onClick={toggleMenu} className='py-3 w-full hover:bg-zinc-600 select-none cursor-pointer text-center'>Home</Link>
                    <Link href="/lotto" onClick={toggleMenu} className='py-3 w-full hover:bg-zinc-600 select-none cursor-pointer text-center'>Lotto</Link>
                    <Link href="/festival" onClick={toggleMenu} className='py-3 w-full hover:bg-zinc-600 select-none cursor-pointer text-center'>Festival</Link>
                    <Link href="/todo" onClick={toggleMenu} className='py-3 w-full hover:bg-zinc-600 select-none cursor-pointer text-center'>TodoList</Link>
                    <Link href="/app01" onClick={toggleMenu} className='py-3 w-full hover:bg-zinc-600 select-none cursor-pointer text-center'>App01</Link>
                    <Link href="/app02" onClick={toggleMenu} className='py-3 w-full hover:bg-zinc-600 select-none cursor-pointer text-center'>App02</Link>
                </ul>
            </div>
        </>
    )
}
