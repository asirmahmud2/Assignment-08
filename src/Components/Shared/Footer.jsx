import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import detimg from "@/assets/main.png"

const Footer = () => {
    return (
        <footer className='bg-[#1E1E1E] text-white mt-20'>
            <div className='container mx-auto px-4 py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
                    <div>
                        <div className='flex items-center gap-3'>
                            <Image src={detimg} alt='logo' className='w-16 h-16 object-contain' />
                            <div>
                                <h2 className='text-3xl font-black'>
                                    <span className='text-[#F7A600]'>Sun</span>
                                    <span className='text-[#004E96]'>Cart</span>
                                </h2>
                                <p className='text-xs tracking-[4px] text-gray-400 mt-1'>
                                    SUMMER ESSENTIALS
                                </p>
                            </div>
                        </div>
                        <p className='text-gray-400 leading-7 mt-6'>
                            Discover premium summer essentials designed for style,
                            comfort, and unforgettable sunny adventures.
                        </p>

                    </div>

                    <div>
                        <h3 className='text-xl font-bold mb-6'> Quick Links </h3>

                        <div className='flex flex-col gap-4 text-gray-400'>
                            <Link href={"/"} className='hover:text-[#FF7A00] transition-all duration-300' >
                                Home
                            </Link>
                            <Link href={"/products"} className='hover:text-[#FF7A00] transition-all duration-300' >
                                Products
                            </Link>
                            <Link href={"/profile"} className='hover:text-[#FF7A00] transition-all duration-300' >
                                My Profile
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className='text-xl font-bold mb-6'>  Contact </h3>

                        <div className='space-y-4 text-gray-400'>
                            <p> Chittagong, Bangladesh </p>
                            <p> support@suncart.com </p>
                            <p> +880 1234-567890 </p>

                        </div>

                    </div>



                    <div>

                        <h3 className='text-xl font-bold mb-6'> Follow Us </h3>

                        <div className='flex items-center gap-4'>
                            <a className='w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF7A00] transition-all duration-300 cursor-pointer'>
                                <FaFacebookF />
                            </a>

                            <a className='w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF7A00] transition-all duration-300 cursor-pointer'>
                                <FaInstagram />
                            </a>

                            <a className='w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF7A00] transition-all duration-300 cursor-pointer'>
                                <FaTwitter />
                            </a>

                            <a className='w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF7A00] transition-all duration-300 cursor-pointer'>
                                <FaLinkedinIn />
                            </a>

                        </div>

                    </div>

                </div>

                <div className='border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm'>

                    <p> © 2026 SunCart. All rights reserved. </p>

                    <div className='flex items-center gap-6'>
                        <a className='hover:text-[#FF7A00] transition-all duration-300 cursor-pointer'>
                            Privacy Policy
                        </a>

                        <a className='hover:text-[#FF7A00] transition-all duration-300 cursor-pointer'>
                            Terms & Conditions
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;