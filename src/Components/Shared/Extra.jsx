import React from 'react';
import { FaTint, FaSun, FaLeaf, FaGlassWhiskey } from 'react-icons/fa';
import Image from 'next/image';
import prada from "@/assets/prada.png";
import rayban from "@/assets/rayban.png";
import zara from "@/assets/zara.png";

const ExtraSection = () => {

    return (
        <div className='space-y-28 mt-28'>
            <div>
                <div className='text-center mb-14'>
                    <p className='uppercase tracking-[5px] text-[#FF7A00] font-semibold'> Summer Lifestyle
                    </p>
                    <h2 className='text-4xl md:text-5xl font-black text-[#1E1E1E] mt-4'>
                        ☀️ Summer Care Tips </h2>

                    <p className='text-[#6B7280] max-w-2xl mx-auto mt-5 leading-8'>
                        Stay fresh, hydrated, and protected during
                        sunny adventures with these essential summer tips. </p>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='bg-white/70 backdrop-blur-xl rounded-[30px] p-8 shadow-lg hover:-translate-y-2 transition-all duration-500'>
                        <div className='w-16 h-16 rounded-2xl bg-[#FFF4E8] flex items-center justify-center text-[#FF7A00] text-2xl'>
                            <FaSun />
                        </div>
                        <h3 className='text-2xl font-bold text-[#1E1E1E] mt-6'>
                            UV Protection
                        </h3>

                        <p className='text-[#6B7280] leading-7 mt-4'>
                            Always wear sunglasses and sunscreen to
                            protect your skin from harmful UV rays.
                        </p>
                    </div>
                    <div className='bg-white/70 backdrop-blur-xl rounded-[30px] p-8 shadow-lg hover:-translate-y-2 transition-all duration-500'>

                        <div className='w-16 h-16 rounded-2xl bg-[#FFF4E8] flex items-center justify-center text-[#FF7A00] text-2xl'>
                            <FaGlassWhiskey />
                        </div>
                        <h3 className='text-2xl font-bold text-[#1E1E1E] mt-6'>
                            Stay Hydrated
                        </h3>
                        <p className='text-[#6B7280] leading-7 mt-4'>
                            Drink enough water throughout the day
                            to keep your body refreshed and energized.
                        </p>
                    </div>
                    <div className='bg-white/70 backdrop-blur-xl rounded-[30px] p-8 shadow-lg hover:-translate-y-2 transition-all duration-500'>
                        <div className='w-16 h-16 rounded-2xl bg-[#FFF4E8] flex items-center justify-center text-[#FF7A00] text-2xl'>
                            <FaLeaf />
                        </div>
                        <h3 className='text-2xl font-bold text-[#1E1E1E] mt-6'>
                            Skincare Routine
                        </h3>
                        <p className='text-[#6B7280] leading-7 mt-4'>
                            Use lightweight skincare products to
                            keep your skin healthy during hot weather.
                        </p>

                    </div>
                    <div className='bg-white/70 backdrop-blur-xl rounded-[30px] p-8 shadow-lg hover:-translate-y-2 transition-all duration-500'>
                        <div className='w-16 h-16 rounded-2xl bg-[#FFF4E8] flex items-center justify-center text-[#FF7A00] text-2xl'>
                            <FaTint />
                        </div>
                        <h3 className='text-2xl font-bold text-[#1E1E1E] mt-6'>
                            Cool & Fresh </h3>
                        <p className='text-[#6B7280] leading-7 mt-4'>
                            Wear breathable summer outfits to stay
                            cool and comfortable all day long. </p>
                    </div>
                </div>
            </div>
            <div>
                <div className='text-center mb-14'>
                    <p className='uppercase tracking-[5px] text-[#FF7A00] font-semibold'>
                        Premium Collection </p>
                    <h2 className='text-4xl md:text-5xl font-black text-[#1E1E1E] mt-4'> ✨ Top Brands
                    </h2>
                    <p className='text-[#6B7280] max-w-2xl mx-auto mt-5 leading-8'>
                        Trusted luxury brands bringing premium quality,
                        comfort, and elegance to your summer lifestyle.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='group relative overflow-hidden rounded-[36px] bg-white p-10 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 border border-white/50'>
                        <div className='absolute top-0 right-0 w-40 h-40 bg-[#FFEDD5] rounded-full blur-3xl opacity-70'></div>
                        <div className='relative z-10 text-center'>

                            <div className='w-32 h-32 mx-auto rounded-full bg-[#FFF7ED] flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-500'>
                                <Image
                                    src={prada}
                                    alt='Prada'
                                    className='w-24 object-contain'
                                />

                            </div>

                            <h2 className='text-4xl font-black text-[#1E1E1E] mt-8'>
                                Prada
                            </h2>
                            <div className='w-16 h-1 bg-[#FF7A00] rounded-full mx-auto mt-4'></div>
                            <p className='text-[#6B7280] mt-6 leading-8 text-lg'>
                                Luxury fashion and premium summer
                                essentials for modern lifestyles.
                            </p>
                        </div>
                    </div>

                    <div className='group relative overflow-hidden rounded-[36px] bg-[#1E1E1E] p-10 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-500'>
                        <div className='absolute bottom-0 left-0 w-40 h-40 bg-[#FF7A00]/20 rounded-full blur-3xl'></div>
                        <div className='relative z-10 text-center'>
                            <div className='w-32 h-32 mx-auto rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-500'>
                                <Image
                                    src={rayban}
                                    alt='RayBan'
                                    className='w-24 object-contain'
                                />
                            </div>

                            <h2 className='text-4xl font-black text-white mt-8'>
                                RayBan </h2>

                            <div className='w-16 h-1 bg-[#FF7A00] rounded-full mx-auto mt-4'></div> 
                            <p className='text-gray-300 mt-6 leading-8 text-lg'>
                                Iconic sunglasses built for comfort,
                                UV protection, and timeless fashion.
                            </p>
                        </div>
                    </div>

                    <div className='group relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#FFF8F0] to-[#FDEEDC] p-10 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-500'>
                        <div className='absolute top-0 left-0 w-40 h-40 bg-[#F4B860]/20 rounded-full blur-3xl'></div>
                        <div className='relative z-10 text-center'>
                            <div className='w-32 h-32 mx-auto rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-500'>
                                <Image
                                    src={zara}
                                    alt='Zara'
                                    className='w-24 object-contain'
                                />
                            </div>
                            <h2 className='text-4xl font-black text-[#1E1E1E] mt-8'>
                                Zara  </h2>

                            <div className='w-16 h-1 bg-[#FF7A00] rounded-full mx-auto mt-4'></div>
                            <p className='text-[#6B7280] mt-6 leading-8 text-lg'>
                                Modern summer collections combining
                                comfort with elegant minimal fashion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;