import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/assets'
import ProductCard from '../components/ProductCard'

const ProductCategory = () => {
  const {products} = useAppContext()
  const {category} = useParams();
  const searchCategory = categories.find((item) => item.path.toLowerCase() === category )
  console.log("search " ,category)
  console.log("search cat " ,searchCategory)
  const filteredProducts = products.filter((product) => product.category.toLowerCase() === category);
  console.log("filtered products", filteredProducts)
  return (
    <div className='mt-16 '>
      {
        searchCategory && (
          <div className='flex flex-col items-end w-max'>
            <p className='text-2xl font-medium'>{searchCategory.text.toUpperCase()}</p>
            <div className='w-16 h-0.5 bg-primary rounded-full'></div>

          </div>
        )
      }
      {
        filteredProducts.length> 0 ? (
          <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6'>
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className='flex items-center justify-center h-[60vh]'>
            <p className='text-2xl font-medium text-primary '>No products found in this category.</p>
          </div>
        )
      }
    </div>
  )
}

export default ProductCategory