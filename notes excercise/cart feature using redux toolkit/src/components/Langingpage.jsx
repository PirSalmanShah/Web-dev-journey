import React from 'react'
import { NavLink } from 'react-router-dom'

const Langingpage = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Salman Store
        <br class="hidden lg:inline-block"/>Style That Speaks for You
      </h1>
      <p class="mb-8 leading-relaxed">Discover the latest in men’s and women’s fashion and footwear — curated for comfort, designed for confidence. From casual essentials to statement pieces, we’ve got everything you need to elevate your wardrobe.</p>
      <div class="flex justify-center">
        <NavLink to="/home"><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Home</button></NavLink>
        <NavLink to="/contact"><button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact us</button></NavLink>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="logo.png"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Langingpage
