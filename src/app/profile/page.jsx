"use client"

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import defaultUserlogo from '@/assets/user.png';

const MyProfile = () => {

const { data: session } = authClient.useSession();
const user = session?.user;

return (
    <div className='min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FDEEDC] to-[#FFF8F0] py-20 px-4'>

        <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
                <p className='uppercase tracking-[5px] text-[#FF7A00] font-semibold'>
                    Account Center
                </p>
                <h1 className='text-5xl font-black text-[#1E1E1E] mt-4'>
                    My Profile
                </h1>
                <p className='text-[#6B7280] mt-5 max-w-2xl mx-auto leading-8'>
                    Manage your SunCart account information and keep your profile up to date.
                </p>
            </div>
            <div className='bg-white/70 backdrop-blur-xl rounded-[40px] shadow-2xl overflow-hidden'>
                <div className='h-40 bg-gradient-to-r from-[#FF7A00] to-[#F4B860]'></div>
                <div className='px-8 pb-10'>
                    <div className='flex justify-center -mt-20'>
                        <img
                            src={user?.image || defaultUserlogo.src}
                            alt="profile"
                            className='w-40 h-40 rounded-full border-[6px] border-white object-cover shadow-xl'
                        />
                    </div>
                    <div className='text-center mt-6'>

                        <h2 className='text-4xl font-black text-[#1E1E1E]'>
                            {user?.name || "SunCart User"}
                        </h2>
                        <p className='text-[#6B7280] mt-2 text-lg'>
                            {user?.email}
                        </p>
                        <div className='inline-flex items-center mt-5 px-5 py-2 rounded-full bg-[#FFF4E8] text-[#FF7A00] font-semibold'>
                            ☀️ SunCart Member
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-6 mt-12'>
                        <div className='bg-[#FFF8F0] rounded-3xl p-6 text-center'>
                            <h3 className='text-sm uppercase tracking-wider text-[#6B7280]'>
                                Member Since
                            </h3>
                            <p className='text-2xl font-black text-[#1E1E1E] mt-2'>
                                2026
                            </p>
                        </div>
                        <div className='bg-[#FFF8F0] rounded-3xl p-6 text-center'>
                            <h3 className='text-sm uppercase tracking-wider text-[#6B7280]'>
                                Account Status
                            </h3>
                            <p className='text-2xl font-black text-green-600 mt-2'>
                                Active
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-12'>

                        <Link
                            href="/update"
                            className='btn rounded-full bg-[#FF7A00] hover:bg-[#E56700] border-0 text-white px-10'
                        >
                            Update Profile
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default MyProfile;