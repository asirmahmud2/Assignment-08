"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Lottie from "lottie-react";
import { useForm } from 'react-hook-form';
import loginAnimation from "@/assets/login.json";
import logo from "@/assets/main.png";
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';

const LoginPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const handleLogin = async(d) => {

        const { data, error } = await authClient.signIn.email({
            email: d.email, // required
            password: d.password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(data, error);
    }

    return (

        <div className='min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FDEEDC] to-[#FFF8F0] flex items-center justify-center px-4 py-10'>

            <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white/70 backdrop-blur-xl rounded-[40px] overflow-hidden shadow-2xl'>
                <div className='relative hidden lg:flex items-center justify-center bg-[#1E1E1E] p-10 overflow-hidden'>
                    <div className='absolute top-0 left-0 w-72 h-72 bg-[#FF7A00]/20 rounded-full blur-3xl'></div>
                    <div className='absolute bottom-0 right-0 w-72 h-72 bg-[#F4B860]/20 rounded-full blur-3xl'></div>
                    <div className='relative z-10 text-center'>
                        <Lottie
                            animationData={loginAnimation}
                            loop={true}/>
                        <h2 className='text-5xl font-black text-white mt-10 leading-tight'>
                            Welcome Back To
                            <span className='text-[#FF7A00]'> SunCart</span>
                        </h2>
                        <p className='text-gray-300 leading-8 mt-6 max-w-md mx-auto'>
                            Discover premium summer essentials,
                            fashion, and lifestyle products designed
                            for modern sunny adventures.
                        </p>
                    </div>
                </div>
                <div className='p-8 md:p-14 flex items-center'>
                    <div className='w-full'>
                        <div className='flex items-center gap-4 justify-center lg:justify-start'>
                            <Image
                                src={logo}
                                alt='logo'
                                className='w-16 h-16 object-contain'
                            />
                            <div>
                                <h2 className='text-3xl font-black text-[#1E1E1E]'> Sun<span className='text-[#FF7A00]'>Cart</span>
                                </h2>
                                <p className='text-xs tracking-[4px] text-[#6B7280] mt-1'>
                                    SUMMER ESSENTIALS
                                </p>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <h1 className='text-5xl font-black text-[#1E1E1E]'>
                                Login </h1>
                            <p className='text-[#6B7280] mt-4 leading-7'>
                                Login to continue your luxury summer shopping experience. </p>
                        </div>
                        <form
                            onSubmit={handleSubmit(handleLogin)}
                            className='mt-10 space-y-6' >
                            <div>
                                <label className='text-[#1E1E1E] font-semibold block mb-3'>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder='Enter your email'
                                    {...register("email", {
                                        required: "Email is required"
                                    })}
                                    className='w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none focus:border-[#FF7A00] transition-all duration-300' />
                                {
                                    errors.email &&
                                    <p className='text-red-500 mt-2 text-sm'>
                                        {errors.email.message}
                                    </p>
                                }
                            </div>
                            <div>
                                <label className='text-[#1E1E1E] font-semibold block mb-3'>
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder='Enter your password'

                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters"
                                        }
                                    })}
                                    className='w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none focus:border-[#FF7A00] transition-all duration-300'
                                />
                                {
                                    errors.password &&
                                    <p className='text-red-500 mt-2 text-sm'>
                                        {errors.password.message}
                                    </p>
                                }

                            </div>
                            <button className='btn w-full rounded-2xl bg-[#FF7A00] hover:bg-[#E56700] border-0 text-white text-lg h-14 shadow-lg shadow-orange-200'>
                                Login
                            </button>
                        </form>
                        <div className='flex items-center gap-4 my-8'>
                            <div className='flex-1 h-[1px] bg-gray-200'></div>
                            <p className='text-[#6B7280] text-sm'>
                                OR CONTINUE WITH
                            </p>
                            <div className='flex-1 h-[1px] bg-gray-200'></div>
                        </div>
                        <button className='btn w-full rounded-2xl bg-white border border-gray-200 text-[#1E1E1E] hover:bg-[#FDEEDC] h-14 text-base shadow-sm'>
                            <FcGoogle className='text-2xl' />
                            Continue with Google
                        </button>
                        <p className='text-center lg:text-left text-[#6B7280] mt-8'>
                            Don’t have an account?
                            <Link
                                href={"/register"}
                                className='text-[#FF7A00] font-bold ml-2 hover:underline' >
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LoginPage;