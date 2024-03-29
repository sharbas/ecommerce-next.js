'use client'
import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';

async function productDetailsFetch() {
  const res = await fetch('https://api.escuelajs.co/api/v1/products');

  if (!res.ok) {
    throw new Error('failed to fetch data from products');
  }
  return res.json();
}

async function Products() {
  const Productsdata = await productDetailsFetch();

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24 '>
    <div className="text-2xl font-bold mb-4">Products</div>
      <div className="w-full grid grid-cols-3 gap-6 ">
        {Productsdata.map((product,index) => (
          
          <Card key={index} productId={product.id} imageSrc={product.images[0]} productName={product.title} price={product.price} />
        ))}
      </div>
    </div>
  );
}

export default Products;
