"use client"

import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateInfo = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const handleUpdate = async (data) => {
        console.log(data);
        const { error } = await authClient.updateUser({
            name: data.name,
            image: data.image
        });
        if (error) {
            console.log(error);
            return;
        }
        console.log("Profile Updated");
    };

    return (
        <div className='min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FDEEDC] to-[#FFF8F0] py-20 px-4'>
            <div className='max-w-3xl mx-auto'>
                <div className='text-center mb-12'>
                    <p className='uppercase tracking-[5px] text-[#FF7A00] font-semibold'>
                        Account Settings
                    </p>
                    <h1 className='text-5xl font-black text-[#1E1E1E] mt-4'>
                        Update Profile
                    </h1>
                    <p className='text-[#6B7280] mt-5 max-w-xl mx-auto leading-8'>
                        Keep your SunCart profile information updated for a
                        better shopping experience.
                    </p>
                </div>

                <div className='bg-white/70 backdrop-blur-xl rounded-[40px] shadow-2xl overflow-hidden'>

                    <div className='px-8 md:px-12 py-12'>

                        <form
                            className='space-y-6'
                            onSubmit={handleSubmit(handleUpdate)}
                        >
                            <div>
                                <label className='text-[#1E1E1E] font-semibold block mb-3'>
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder='Enter your full name'
                                    {...register("name", {
                                        required: "Name is required"
                                    })}
                                    className='w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none focus:border-[#FF7A00] transition-all duration-300'
                                />
                                {
                                    errors.name &&
                                    <p className='text-red-500 mt-2 text-sm'>
                                        {errors.name.message}
                                    </p>
                                }
                            </div>
                            <div>
                                <label className='text-[#1E1E1E] font-semibold block mb-3'>
                                    Photo URL
                                </label>
                                <input
                                    type="text"
                                    placeholder='Enter your profile image URL'
                                    {...register("image", {
                                        required: "Image URL is required"
                                    })}
                                    className='w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none focus:border-[#FF7A00] transition-all duration-300'
                                />
                                {
                                    errors.image &&
                                    <p className='text-red-500 mt-2 text-sm'>
                                        {errors.image.message}
                                    </p>
                                }
                            </div>
                            <button
                                type='submit'
                                className='btn w-full rounded-2xl bg-[#FF7A00] hover:bg-[#E56700] border-0 text-white text-lg h-14 shadow-lg shadow-orange-200'
                            >
                                Update Information
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateInfo;