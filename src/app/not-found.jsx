import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FDEEDC] to-[#FFF8F0] flex items-center justify-center px-4'>
            <div className='max-w-2xl text-center'>
                <h1 className='text-[120px] md:text-[180px] font-black leading-none text-[#FF7A00]/20'>
                    404
                </h1>

                <h2 className='text-4xl md:text-5xl font-black text-[#1E1E1E] -mt-8'>
                    Lost In The Summer?
                </h2>

                <p className='text-[#6B7280] text-lg mt-6 leading-8 max-w-xl mx-auto'>
                    The page you are looking for might have melted under the summer heat.
                    Let’s get you back to the sunny side of SunCart.
                </p>

                <div className='flex items-center justify-center gap-4 mt-10 flex-wrap'>

                    <Link
                        href={"/"}
                        className='btn rounded-full bg-[#FF7A00] hover:bg-[#E56700] border-0 text-white px-8 shadow-lg shadow-orange-200'
                    >
                        Back To Home
                    </Link>

                    <Link
                        href={"/products"}
                        className='btn rounded-full bg-white border-0 text-[#1E1E1E] hover:bg-[#FDEEDC] px-8 shadow-md'
                    >
                        Explore Products
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default NotFoundPage;