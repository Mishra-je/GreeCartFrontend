import React from 'react'
import { assets } from '../assets/assets.js'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className='relative'>
      <img src={assets.main_banner_bg} className='w-full hidden md:block' alt="banner" />
      <img src={assets.main_banner_bg_sm} className='w-full md:hidden' alt="banner-sm" />

      <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
        <h1 className='text-3xl md:text-4xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'>
          Freshness You Can Trust, Savings You will Love!
        </h1>

        {/* 👇 Moved button container here */}
        <div className='flex items-center gap-4 mt-6 font-medium'>
          <Link to={'/products'} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'>
            <img src={assets.white_arrow_icon} className='md:hidden transition group-focus:translate-x-1 text-black' alt='arrow' />
            Shop now
          </Link>
          <Link to={'/products'} className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'>
            <img src={assets.black_arrow_icon} className='transition group-hover:translate-x-1' alt='arrow' />
            Explore deals
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
