import React from 'react'

async function categorysDetailsFetch(){
  const res=await fetch('https://api.escuelajs.co/api/v1/categories')

  if(!res.ok){
      throw new Error('failed to fetch data from products')
  }
  return res.json()

}

async function Category() {
  const categories=await categorysDetailsFetch()
  console.log(categories);
  return (
    
    <div className='flex min-h-screen flex-col items-center justify-between p-24 '>
      <h1 className="text-3xl font-bold mb-4">Categories</h1>
      <div className="w-full grid grid-cols-3 gap-10 mt-40">
      {categories.map((category)=>(

<div key={category.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-4/6 ml-16">
    <a href="#">
        <img className="rounded-t-lg" src={category.image} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{category.name}</h5>
        </a>
     
    </div>
    </div>
      ))}
</div>
</div>
  )
}

export default Category