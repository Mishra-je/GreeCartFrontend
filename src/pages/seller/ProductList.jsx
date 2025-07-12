// import React from 'react'
// import { useAppContext } from '../../context/AppContext'
// import toast from 'react-hot-toast';


// const ProductList = () => {
//     const{products,currency,axios, fetchProducts} = useAppContext();

//     const toggleStock =  async (id,inStock) => {
//         try {
//             const {data} = await axios.post('/api/product/stock',{id,inStock});

//             if(data.success){
//            fetchProducts();
//            toast.success(data.message)
//             }else{
//                 toast.error(data.message)
//             }
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }
//   return (
//     <div className="no-scrollbar flex-1 flex flex-col justify-between ">
//             <div className="w-full md:p-10 p-4">
//                 <h2 className="pb-4 text-lg font-medium">All Products</h2>
//                 <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
//                     <table className="md:table-auto table-fixed w-full overflow-hidden">
//                         <thead className="text-gray-900 text-sm text-left">
//                             <tr>
//                                 <th className="px-4 py-3 font-semibold truncate">Product</th>
//                                 <th className="px-4 py-3 font-semibold truncate">Category</th>
//                                 <th className="px-4 py-3 font-semibold truncate hidden md:block">Selling Price</th>
//                                 <th className="px-4 py-3 font-semibold truncate">In Stock</th>
//                             </tr>
//                         </thead>
//                         <tbody className="text-sm text-gray-500">
//                             {products.map((product) => (
//                                 <tr key={product._id} className="border-t border-gray-500/20">
//                                     <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
//                                         <div className="border border-gray-300 rounded p-2">
//                                             <img src={product.image[0]} alt="Product" className="w-16" />
//                                         </div>
//                                         <span className="truncate max-sm:hidden w-full">{product.name}</span>
//                                     </td>
//                                     <td className="px-4 py-3">{product.category}</td>
//                                     <td className="px-4 py-3 max-sm:hidden">${product.price}</td>
//                                     <td className="px-4 py-3">
//                                         <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
//                                             <input type="checkbox" className="sr-only peer"  />
//                                             <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
//                                             <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
//                                         </label>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//   )
// }

// export default ProductList



// import React from 'react'
// import { useAppContext } from '../../context/AppContext'
// import toast from 'react-hot-toast';

// const ProductList = () => {
//   const { products, currency, axios, fetchProducts } = useAppContext();

//   const toggleStock = async (id, inStock) => {
//     try {
//       const { data } = await axios.post('/api/product/stock', { id, inStock });

//       if (data.success) {
//         fetchProducts();
//         toast.success(data.message);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className="flex-1 flex flex-col items-center justify-start w-full min-h-screen md:p-10 p-4 bg-gray-50">
//       <div className="w-full max-w-5xl">
//         <h2 className="pb-6 text-2xl font-semibold text-gray-800">All Products</h2>
//         <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
//           <table className="w-full table-auto">
//             <thead className="bg-gray-100">
//               <tr className="text-left text-gray-700 text-sm">
//                 <th className="px-4 py-3 font-medium">Product</th>
//                 <th className="px-4 py-3 font-medium">Category</th>
//                 <th className="px-4 py-3 font-medium hidden md:table-cell">Selling Price</th>
//                 <th className="px-4 py-3 font-medium">In Stock</th>
//               </tr>
//             </thead>
//             <tbody className="text-sm text-gray-600">
//               {products.map((product) => (
//                 <tr
//                   key={product._id}
//                   className="border-t border-gray-200 hover:bg-gray-50 transition"
//                 >
//                   <td className="px-4 py-4 flex items-center gap-4">
//                     <div className="border border-gray-200 rounded-md overflow-hidden w-16 h-16 flex-shrink-0">
//                       <img
//                         src={product.image[0]}
//                         alt={product.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <span className="font-medium text-gray-800 line-clamp-1">
//                       {product.name}
//                     </span>
//                   </td>
//                   <td className="px-4 py-4">{product.category}</td>
//                   <td className="px-4 py-4 hidden md:table-cell">
//                     {currency} {product.price}
//                   </td>
//                   <td className="px-4 py-4">
//                     <label className="relative inline-flex items-center cursor-pointer">
//                       <input
//                         type="checkbox"
//                         checked={product.inStock}
//                         onChange={() =>
//                           toggleStock(product._id, !product.inStock)
//                         }
//                         className="sr-only peer"
//                       />
//                       <div className="w-12 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
//                       <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
//                     </label>
//                   </td>
//                 </tr>
//               ))}
//               {products.length === 0 && (
//                 <tr>
//                   <td colSpan="4" className="px-4 py-6 text-center text-gray-400">
//                     No products found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductList;




// import React from 'react'
// import { useAppContext } from '../../context/AppContext'
// import toast from 'react-hot-toast'

// const ProductList = () => {
//   const { products, currency, axios, fetchProducts } = useAppContext()

//   const toggleStock = async (id, inStock) => {
//     try {
//       const { data } = await axios.post('/api/product/stock', { id, inStock })
//       if (data.success) {
//         fetchProducts()
//         toast.success(data.message)
//       } else {
//         toast.error(data.message)
//       }
//     } catch (error) {
//       toast.error(error.message)
//     }
//   }

//   return (
//     <div className="flex-1 flex flex-col items-center w-full min-h-screen bg-gray-50 p-4 md:p-10">
//       <div className="w-full max-w-6xl">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">All Products</h2>

//         {products.length === 0 ? (
//           <div className="text-center text-gray-400 py-20">No products found.</div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {products.map((product) => (
//               <div
//                 key={product._id}
//                 className="bg-white rounded-lg border border-gray-200 shadow hover:shadow-md transition p-4 flex flex-col"
//               >
//                 <div className="w-full h-48 rounded-md overflow-hidden mb-4">
//                   <img
//                     src={product.image[0]}
//                     alt={product.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <div className="flex-1 flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800 truncate mb-1">
//                       {product.name}
//                     </h3>
//                     <p className="text-sm text-gray-500 mb-1">
//                       Category: <span className="font-medium">{product.category}</span>
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       Price: <span className="font-semibold">{currency} {product.price}</span>
//                     </p>
//                   </div>

//                   <div className="mt-4 flex items-center justify-between">
//                     <span className="text-sm text-gray-600">In Stock:</span>
//                     <label className="relative inline-flex items-center cursor-pointer">
//                       <input
//                         type="checkbox"
//                         checked={product.inStock}
//                         onChange={() => toggleStock(product._id, !product.inStock)}
//                         className="sr-only peer"
//                       />
//                       <div className="w-12 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
//                       <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default ProductList


import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'
import { categories } from '../../assets/assets'


const ProductList = () => {
  const { products, currency, axios, fetchProducts } = useAppContext()

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [sortOrder, setSortOrder] = useState('')

  const toggleStock = async (id, inStock) => {
    try {
      const { data } = await axios.post('/api/product/stock', { id, inStock })
      if (data.success) {
        fetchProducts()
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) =>
      selectedCategory ? product.category === selectedCategory : true
    )
    .sort((a, b) => {
      if (sortOrder === 'price-asc') return a.price - b.price
      if (sortOrder === 'price-desc') return b.price - a.price
      return 0
    })

  return (
    <div className="flex-1 flex flex-col items-center w-full min-h-screen bg-gray-50 p-4 md:p-10">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">All Products</h2>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md outline-none"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md outline-none"
          >
            <option value="">All Categories</option>
            {categories.map((c, i) => (
              <option key={i} value={c.path}>{c.path}</option>
            ))}
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md outline-none"
          >
            <option value="">Sort By</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
          </select>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center text-gray-400 py-20">
            No products found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg border border-gray-200 shadow hover:shadow-lg transition-all p-4 flex flex-col hover:-translate-y-1"
              >
                <div className="w-full h-48 rounded-md overflow-hidden mb-4">
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 truncate mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-1">
                      <span className="font-medium">Category:</span> {product.category}
                    </p>
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Price:</span> {currency} {product.offerPrice }
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-600">In Stock:</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={product.inStock}
                        onChange={() =>
                          toggleStock(product._id, !product.inStock)
                        }
                        className="sr-only peer"
                      />
                      <div className="w-12 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                      <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList
