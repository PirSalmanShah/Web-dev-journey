import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto ">
    <div className="flex flex-wrap justify-center gap-6">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 border-gray-500 rounded-md">
      <Link to="/product/1">
        <div className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="./men.jpg"/>
        </div>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY MEN</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer Shirt</h2>
          <p className="mt-1">$16.00</p>
        </div>
      </Link>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 border-gray-500 rounded-md">
      <Link to="/product/2">
        <div className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="./men2.jpg"/>
        </div>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY MEN</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p className="mt-1">$21.15</p>
        </div>
      </Link>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 border-gray-500 rounded-md">
      <Link to="/product/3">
        <div className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="./ms.jpg"/>
        </div>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY MEN</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p className="mt-1">$12.00</p>
        </div>
      </Link>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 border-gray-500 rounded-md">
      <Link to="/product/4">
        <div className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="./ms2.jpg"/>
        </div>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY MEN</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p className="mt-1">$18.40</p>
        </div>
      </Link>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 border-gray-500 rounded-md">
      <Link to="/product/5">
        <div className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="female.jpg"/>
        </div>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY WOMEN</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catayzer Dress</h2>
          <p className="mt-1">$16.00</p>
        </div>
      </Link>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 border-gray-500 rounded-md">
      <Link to="/product/6">
        <div className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="female2.jpg"/>
        </div>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY WOMEN</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Rising Star Dress</h2>
          <p className="mt-1">$21.15</p>
        </div>
      </Link>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 border-gray-500 rounded-md">
      <Link to="/product/7">
        <div className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="./fs.jpg"/>
        </div>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY WOMEN</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Jupiter</h2>
          <p className="mt-1">$12.00</p>
        </div>
      </Link>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 border-gray-500 rounded-md">
      <Link to="/product/8">
        <div className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="./fs2.jpg"/>
        </div>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY WOMEN</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Rose</h2>
          <p className="mt-1">$18.40</p>
        </div>
      </Link>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Home
