import React from 'react';
import data from '@/data/products.json';

const ProductsPage = () => {
    return (
        <div className='container mx-auto p-20'>
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
        </div>
    );
};

export default ProductsPage;