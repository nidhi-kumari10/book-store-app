import React from 'react';
import banner from "../assets/banner.jpg"

const Banner = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto ms:px-20 px-4 font-serif flex flex-col md:flex-row mt-16'>
      <div className='w-full md:w-1/2 mt-12 md:mt-30 order-2 md:order-1 ml-16'>
      <div className='space-y-12 '>
           <h1 className="text-4xl font-bold">
        Hello, welcomes here to learn something <span className='text-pink-500'>new everyday!!</span>
      </h1>
      <p className='text-xl'>
        Discover a place where books inspire curiosity, spark imagination, and help you grow one page at a time. Whether you’re exploring new ideas, deepening your knowledge, or simply enjoying a good story, you’ll always find something worth reading here.
      </p>
<label className="input validator border ">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" required />
</label>
<div className="validator-hint hidden">Enter valid email address</div>
      </div>
<button className="btn mt-6 btn-secondary p-2 bg-pink-500 text-white font-bold">Get Started</button>
    
      </div>
      <div className='w-full md:w-1/2 flex justify-center md:mt-[50px] order-1'>
      <img src={banner} className='w-[500px] h-[300px] object-contain'></img>
      </div>
    </div>
  )
}

export default Banner
