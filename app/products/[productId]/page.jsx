// app/products/[productId]/page.jsx

'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

 function SingleProduct() {
  const router = useParams();
  const id=  router.productId
console.log(id,'idddddddddddd');
const [product,setProduct]=useState()
useEffect(() => {
    async function callFn() {
      try {
        const res = await getsingleProductdata(id);
        console.log(res,'total dataaaaaaaaaa');
        setProduct(res);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
    
    callFn();
  }, [id]);


  return (
    // <div>
    //   <h1>{product.title}</h1>
    //   <p>Description: {product.description}</p>
    //   <p>Price: {product.price}</p>
    //   {/* Add more details as needed */}
    // </div>
    <div className="font-[sans-serif] bg-white">
    {product &&
    <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
      <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
        <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
          <div className="px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
            <img src={product.images[0]} alt="Product" className="w-4/5 rounded object-cover" />
         
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
            <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
              <img src={product.images[0]} alt="Product2" className="w-24 cursor-pointer" />
            </div>
            <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
              <img src={product.images[1]} alt="Product2" className="w-24 cursor-pointer" />
            </div>
            <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
              <img src={product.images[2]} alt="Product2" className="w-24 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-extrabold text-[#333]">{product.title}</h2>
          <div className="flex flex-wrap gap-4 mt-6">
            <p className="text-[#333] text-4xl font-bold">{product.price}$</p>
          </div>
          <div className="flex space-x-2 mt-4">
            <h4 className="text-[#333] text-base">{product.description}</h4>
          </div>
          <div className="mt-10">
            <h3 className="text-lg font-bold text-gray-800">Category:   {product.category.name}</h3>
          </div>
          <div className="flex flex-wrap gap-4 mt-10">
            <button type="button" className="min-w-[200px] px-4 py-3 bg-[#333] hover:bg-[#111] text-white text-sm font-bold rounded">Buy now</button>
            <button type="button" className="min-w-[200px] px-4 py-2.5 border border-[#333] bg-transparent hover:bg-gray-50 text-[#333] text-sm font-bold rounded">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  }
  </div>
  );
}

export default SingleProduct;

export async function getsingleProductdata(productId) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`);
  const product = await res.json();

  return product;
}
