import Image from 'next/image';
import React from 'react';
import data from '@/data/products.json';
import { FaStar } from 'react-icons/fa';

export const getDetails = (i) => {
    const product = data.find(pro => pro.id == i);
    return product;
}

const ProductDetails = async ({ params }) => {
    const { id } = await params;
    const product = getDetails(id);

    return (
        <div className='min-h-screen bg-gradient-to-b from-[#FFF8F0] to-[#FDEEDC] py-16 px-4'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                    <div className='bg-white/70 backdrop-blur-xl rounded-[40px] p-8 shadow-2xl overflow-hidden'>

                        <Image
                            src={product.image}
                            alt={product.name}
                            width={800}
                            height={800}
                            unoptimized
                            className='w-full h-[500px] object-cover rounded-[30px] hover:scale-105 transition-all duration-700'
                        />

                    </div>
                    <div>
                        <p className='uppercase tracking-[5px] text-[#FF7A00] font-semibold'>
                            {product.category}
                        </p>
                        <h1 className='text-5xl md:text-6xl font-black text-[#1E1E1E] mt-5 leading-tight'>
                            {product.name}
                        </h1>
                        <h3 className='text-2xl text-[#6B7280] font-semibold mt-4'>
                            By {product.brand}
                        </h3>

                        <div className='flex items-center gap-3 mt-8'>

                            <div className='flex items-center gap-2 bg-[#FFF4E8] px-5 py-3 rounded-full'>
                                <FaStar className='text-[#FFB800]' />
                                <span className='font-bold text-[#1E1E1E] text-lg'>
                                    {product.rating}
                                </span>

                            </div>
                            <div className='bg-green-100 text-green-700 px-5 py-3 rounded-full font-semibold'>
                                In Stock : {product.stock}
                            </div>

                        </div>
                        <h2 className='text-6xl font-black text-[#FF7A00] mt-10'>
                            ${product.price}
                        </h2>
                        <p className='text-[#6B7280] text-lg leading-9 mt-10'>
                            {product.description}
                        </p>
                        <div className='flex items-center gap-5 mt-12 flex-wrap'>

                            <button className='btn rounded-full bg-[#FF7A00] hover:bg-[#E56700] border-0 text-white px-10 text-lg shadow-xl shadow-orange-200'>
                                Buy Now
                            </button>

                            <button className='btn rounded-full bg-white border-0 text-[#1E1E1E] hover:bg-[#FDEEDC] px-10 text-lg shadow-md'>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductDetails;