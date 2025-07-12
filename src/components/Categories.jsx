import React from 'react'
import { assets, categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Categories = () => {
    // console.log('cats are',categories)
    const {navigate} = useAppContext()

  return (
    <div className=' mt-16 '>
        <p className=' text-2xl md:text-3xl font-semibold'>Categories</p>
        <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-8'>
        {
            categories.map((catagory,index) => {
                return(
                    <div key={index} className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center' style={{backgroundColor : catagory.bgColor}} onClick={() => {navigate(`/products/${catagory.path.toLowerCase() }`);
                    scrollTo(0,0)
                    }}>
                <img src={catagory.image} className='group-hover:scale-125 transition max-w-28' />
                <p className='text-sm font-medium'>{catagory.text}</p>

            </div>
                )
            })
        }
        
        </div>
    </div>
  )
}

export default Categories