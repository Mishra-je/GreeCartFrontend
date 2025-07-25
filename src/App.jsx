import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import { useAppContext } from './context/AppContext'
import Login from './components/Login'
import AllProduct from './pages/AllProduct'
import ProductCategory from './pages/ProductCategory'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import AddAddress from './pages/AddAddress'
import MyOrders from './pages/MyOrders'
import SellerLogin from './components/seller/SellerLogin'
import SellerLayout from './pages/seller/SellerLayout'
import AddProduct from './pages/seller/AddProduct'
import Order from './pages/seller/Order'
import ProductList from './pages/seller/ProductList'
import Contact from './components/Contact'

const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller")
  const {showUserLogin, IsSeller} = useAppContext();
  // console.log("is seller IIN", IsSeller)
  return (
    <div className='text-default min-h-screen text-gray-700 bg-white'>
     {isSellerPath ? null :  <Navbar/>}
     {showUserLogin ? <Login/> : null} 
    <Toaster/>
      <div className={` ${isSellerPath ? "" : " px-6 md:px-16 lg:px-24 xl:px-32" }`}>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/products' element={<AllProduct/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/products/:category' element={<ProductCategory/>}></Route>
          <Route path='/products/:category/:id' element={<ProductDetails/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/add-address' element={<AddAddress/>}></Route>
          <Route path='/my-orders' element={<MyOrders/>}></Route>
          <Route path='/seller' element={IsSeller ? <SellerLayout/> : <SellerLogin/>}>
          <Route index element={IsSeller ? <AddProduct /> : null} />
          <Route path='product_list' element={<ProductList/>} />
          <Route path='orders' element={<Order/>} />
          </Route>
        </Routes>
        {!isSellerPath && <Footer/>}
      </div>
    
    </div>
  )
}

export default App