import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { dummyOrders } from '../assets/assets';
import { data } from 'react-router-dom';

const MyOrders = () => {
    const[MyOrders,setMyOrders] = useState([])
    const {currency,axios,User} =  useAppContext();

    const fetchMyorders = async() => {
        try {
             const { data } = await axios.get(`/api/order/user?userId=${User._id}`);
            // console.log(data)
            if(data.success){
                setMyOrders(data.orders)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(User){
             fetchMyorders();
        }
        fetchMyorders();
    },[User])
  return (
    <div className='mt-16 pb-16 cursor-pointer'>
        <div className='flex flex-col items-end w-max mb-8 '>
              <p className='text-2xl font-medium items-end w-max capitalize '>MY ORDERS</p>
              <div className='w-16 h-0.5 bg-primary rounded-full '></div>


        </div>

        {
            MyOrders.map((order,index) => (
                <div key={index} className='border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl '>
                    <p className='flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col'>
                        <span>OrderId : {order._id}</span>
                        <span>Payment : {order.paymentType}</span>
                        <span>Total Amount : {currency}{order.amount}</span>
                    </p>
                    {order.items.map((item,index) => (
                        <div key={index} className= {`relative bg-white text-gray-500/70 ${order.items.length !== index + 1 && "border-b"} border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 md:gap-16 w-full max-w-4xl   `}>
                            <div className='flex items-center mb-4 md:mb-6 mt-4 '>
                                <div className='bg-primary/10 p-4 rounded-lg  '>
                                    <img src={item.product.image[0]} className='w-16 h-16' />
                                </div>
                                <div className='ml-4'>
                                    <h2 className='text-xl font-medium text-gray-800 '>{item.product.name}</h2>
                                    <p >category: {item.product.category}</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center md:ml-8 mb-4 md:mb-0'> 
                                <p>Quantity : {item.quantity || "1"}</p>
                                <p>Status : {order.status}</p>
                                <p>Date : {new Date(order.createdAt).toLocaleDateString()}</p>
                            </div>
                            <p className='text-primary text-lg font-medium'>
                                  Amount : {currency}{item.product.offerPrice * item.quantity}
                            </p>
                          

                        </div>
                    ))}
                </div>

            ))}
      
    </div>
  )
}

export default MyOrders