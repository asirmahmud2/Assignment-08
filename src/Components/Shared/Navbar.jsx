"use client"

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import defaultUserlogo from '@/assets/user.png';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const { data: session } = authClient.useSession();

    const user = session?.user;

    const handleLogout = async () => {
        await authClient.signOut();
    }
    const links = (
        <>
            <li>
                <Link
                    className='text-[#1E1E1E] hover:text-[#FF7A00] transition-all duration-300 font-medium'
                    href={"/"}
                >
                    Home
                </Link>
            </li>

            <li>
                <Link
                    className='text-[#1E1E1E] hover:text-[#FF7A00] transition-all duration-300 font-medium'
                    href={"/products"}
                >
                    Products
                </Link>
            </li>

            {
                <li>
                    <Link
                        className='text-[#1E1E1E] hover:text-[#FF7A00] transition-all duration-300 font-medium'
                        href={"/profile"}
                    >
                        My Profile
                    </Link>
                </li>
            }
        </>
    );

    return (

        <div className="sticky top-0 z-50 backdrop-blur-xl bg-[#FFF8F0]/80 border-b border-white/20">
            <div className='navbar container mx-auto px-2 lg:px-0'>
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-xl bg-white rounded-2xl w-56"
                        >
                            {links}
                        </ul>

                    </div>
                    <Link
                        href={"/"}
                        className="flex items-center gap-2"
                    >
                        <Image
                            src={logo}
                            alt='logo'
                            className='w-14 h-14 object-contain'
                        />
                        <h2 className='text-2xl font-black'>
                            <span className='text-[#F5A000]'>Sun</span>
                            <span className='text-[#0056A6]'>Cart</span>
                        </h2>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">

                    <ul className='flex items-center gap-8'>
                        {links}
                    </ul>

                </div>
                <div className="navbar-end gap-3">
                    {
                        user ? (
                            <div className='flex items-center gap-4'>
                                <div className='hidden md:block text-right'>
                                    <p className='font-bold text-[#1E1E1E]'>
                                        <span className='text-gray-500'> Welcome Back,</span> {user.name}
                                    </p>
                                </div>
                                <img
                                    src={user?.image || defaultUserlogo.src}
                                    alt="user"
                                    className='w-12 h-12 rounded-full object-cover' />
                                <button
                                    onClick={handleLogout}
                                    className='btn rounded-full bg-[#FF7A00] hover:bg-[#E56700] border-0 text-white px-6'
                                >
                                    Logout
                                </button>

                            </div>
                        ) : (

                            <>
                                <Link
                                    href={"/login"}
                                    className="btn border-0 rounded-full bg-white text-[#1E1E1E] hover:bg-[#FDEEDC] shadow-none"
                                >
                                    Login
                                </Link>

                                <Link
                                    href={"/register"}
                                    className="btn rounded-full bg-[#FF7A00] hover:bg-[#E56700] border-0 text-white px-6"
                                >
                                    Register
                                </Link>
                            </>

                        )
                    }

                </div>

            </div>

        </div>

    );
};

export default Navbar;