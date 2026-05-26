import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png'

const Navbar = () => {

    const links = <>
        <li> <Link
                className='text-[#1E1E1E] hover:text-[#FF7A00] transition-all duration-300 font-medium'
                href={"/"}>
                Home
            </Link>
        </li>
        <li>
            <Link className='text-[#1E1E1E] hover:text-[#FF7A00] transition-all duration-300 font-medium'
                href={"/products"}>
                Products
            </Link>
        </li>
        <li>
            <Link className='text-[#1E1E1E] hover:text-[#FF7A00] transition-all duration-300 font-medium'
                href={"/profile"}>
                My Profile
            </Link>
        </li>
    </>

    return (
        <div className="sticky top-0 z-50 backdrop-blur-md bg-[#FFF8F0]/70 border-b border-white/20">
            <div className='navbar container mx-auto px-2 lg:px-0'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-white rounded-2xl z-1 mt-3 w-52 p-3 shadow-xl">
                            {
                                links
                            }
                        </ul>
                    </div>

                    <Link href={"/"} className="flex items-center">
                        <Image src={logo} alt='logo'
                            className='w-16 h-16 object-contain'/>

                        <h2 className='text-2xl font-black text-[#1E1E1E]'>
                            Sun<span className='text-[#FF7A00]'>Cart</span>
                        </h2>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className='flex items-center gap-8'>
                        {
                            links
                        }
                    </ul>
                </div>

                <div className="navbar-end gap-3">
                    <Link href={"/login"} className="btn border-0 rounded-full bg-white text-[#1E1E1E] hover:bg-[#FDEEDC] shadow-none">
                        Login
                    </Link>

                    <Link href={"/register"} className="btn rounded-full bg-[#FF7A00] hover:bg-[#E56700] border-0 text-white px-6">
                        Register
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default Navbar;