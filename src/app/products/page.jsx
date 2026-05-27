import React from 'react';
import data from '@/data/products.json';
import CardDesign from '@/Components/Shared/Card';

const ProductsPage = () => {
    return (
        <div className='container mx-auto p-20'>
            <div className='text-center mb-14'>
                <p className='uppercase tracking-[5px] text-[#FF7A00] font-semibold'>
                    Summer Essentials
                </p>
                <h2 className='text-4xl md:text-5xl font-black text-[#1E1E1E] mt-4'>
                    🔥 Explore Our Products
                </h2>
                <p className='text-[#6B7280] max-w-2xl mx-auto mt-5 leading-8'>
                    Discover premium summer collections crafted for comfort,
                    elegance, and modern lifestyle. From stylish accessories
                    to everyday essentials, find everything you need for the
                    perfect sunny season.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    data.map(product => (
                        <CardDesign key={product.id} product={product} ></CardDesign>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductsPage;