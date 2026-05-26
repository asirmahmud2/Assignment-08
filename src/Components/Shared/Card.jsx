import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const CardDesign = ({ product }) => {

    const { id, name, image, rating, price } = product;

    return (

        <div className='group rounded-[32px] bg-white/70 backdrop-blur-xl border border-white/40 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500'>
            <div className='relative overflow-hidden bg-[#FFF8F0]'>
                <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={500}
                    unoptimized
                    className='w-full h-[300px] object-cover'
                />
            </div>

            <div className='p-6'>
                <h2 className='text-2xl font-bold text-[#1E1E1E] line-clamp-2'>
                    {name}
                </h2>
                <div className='flex items-center justify-between mt-5'>
                    <div className='flex items-center gap-2 bg-[#FFF4E8] px-4 py-2 rounded-full'>

                        <FaStar className='text-[#FFB800]' />

                        <span className='font-semibold text-[#1E1E1E]'>
                            {rating}
                        </span>

                    </div>

                    <h3 className='text-3xl font-black text-[#FF7A00]'>
                        ${price}
                    </h3>

                </div>

                {/* BUTTON */}

                <Link
                    href={`/products/${id}`}
                    className='btn w-full mt-6 rounded-full bg-[#FF7A00] hover:bg-[#E56700] border-0 text-white text-base shadow-lg shadow-orange-200'
                >
                    View Details
                </Link>

            </div>

        </div>

    );
};

export default CardDesign;