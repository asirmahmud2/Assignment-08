import React from 'react';
import img from '@/assets/hero.png'
import Image from 'next/image';
import data from '@/data/products.json';
import CardDesign from './Card';
import Link from 'next/link';

const Hero = () => {

    const products = data.slice(0, 3);
    return (

        <div className='space-y-24'>
            <div className=''>
                <Image
                    src={img}
                    alt="Hero banner image"
                    className='w-full object-cover rounded-xl'
                />
            </div>


            <div>
                <div className='text-center mb-14'>
                    <p className='uppercase tracking-[5px] text-[#FF7A00] font-semibold'>
                        Trending Collection
                    </p>
                    <h2 className='text-4xl md:text-5xl font-black text-[#1E1E1E] mt-4'>
                        🔥 Popular Products
                    </h2>


                    <p className='text-[#6B7280] max-w-2xl mx-auto mt-5 leading-8'>
                        Explore our handpicked summer essentials designed
                        for comfort, luxury, and modern lifestyle.
                    </p>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        products.map(product => (
                            <CardDesign key={product.id} product={product} ></CardDesign>
                        ))
                    }
                </div>
            </div>
        </div>

    );
};

export default Hero;