// import React, { useEffect, useState } from 'react'
// import { assets, dummyOrders } from '../../assets/assets'
// import { useAppContext } from '../../context/AppContext'
// import axios from 'axios'
// import toast from 'react-hot-toast'

// const Order = () => {
//     const[orders,setOrders] = useState([])
//     const {axios} = useAppContext()
//     const fetchOrders = async () => {
//         try {
//             const {data} = await axios.get('/api/order/seller')
//             console.log("All orders are", data)
//             if(data.success){
//                 setOrders(data.orders)
//             }else{
//                 toast.error(data.message)
//             }
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }

//     useEffect(() => {
//         fetchOrders();
//     },[])
//   return (
//     <div className='no-scrollbar flex-1 h-[95vh]  overflow-y-scroll'>
//             <div className="md:p-10 p-4 space-y-4">
//             <h2 className="text-lg font-medium">Orders List</h2>
//             {orders.map((order, index) => (
//                 <div key={index} className="flex flex-col  md:items-center md:flex-row justify-between gap-5 p-5 max-w-4xl rounded-md border border-gray-300 ">
//                     <div className="flex gap-5 max-w-80 ">
//                         <img className="w-12 h-12 object-cover " src={assets.box_icon} alt="boxIcon" />
//                         <div>
//                             {order.items.map((item, index) => (
//                                 <div key={index} className="flex flex-col ">
//                                     <p className="font-medium">
//                                         {item.product.name} {""}
//                                         <span className= "text-primary  ">x {item.quantity}</span>
//                                     </p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="text-sm md:text-base text-black/60 ">
//                         <p className='text-black/80'>{order.address.firstName} {order.address.lastName}</p>

//                         <p>{order.address.street}, {order.address.city}, </p> 
//                         <p> {order.address.state}, {order.address.zipcode}, {order.address.country}</p>
//                         <p></p>
//                         <p>{order.address.phone}</p>
//                     </div>

//                     <p className="font-medium text-lg my-auto ">${order.amount}</p>

//                     <div className="flex flex-col text-sm md:text-base text-black/60 ">
//                         <p>Method: {order.paymentType}</p>
//                         <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
//                         <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
// </div>
//   )
// }

// export default Order

import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Order = () => {
  const [orders, setOrders] = useState([])
  const { axios } = useAppContext()

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get('/api/order/seller')
      console.log("All orders are", data)
      if (data.success) {
        setOrders(data.orders)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  // ✅ Helper to calculate total price of items in an order:
  const getOrderTotal = (order) => {
    return order.items.reduce((total, item) => {
      return total + item.product.offerPrice * item.quantity
    }, 0)
  }

  return (
    <div className='no-scrollbar flex-1 h-[95vh] overflow-y-scroll'>
      <div className="md:p-10 p-4 space-y-4">
        <h2 className="text-lg font-medium">Orders List</h2>
        {orders.map((order, index) => (
          <div key={index} className="flex flex-col md:items-center md:flex-row justify-between gap-5 p-5 max-w-4xl rounded-md border border-gray-300 ">
            <div className="flex gap-5 max-w-80 ">
              <img className="w-12 h-12 object-cover " src={assets.box_icon} alt="boxIcon" />
              <div>
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col ">
                    <p className="font-medium">
                      {item.product.name}{" "}
                      <span className="text-primary">x {item.quantity}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-sm md:text-base text-black/60 ">
              <p className='text-black/80'>{order.address.firstName} {order.address.lastName}</p>
              <p>{order.address.street}, {order.address.city}</p>
              <p>{order.address.state}, {order.address.zipcode}, {order.address.country}</p>
              <p>{order.address.phone}</p>
            </div>

            {/* ✅ Use helper here instead of order.amount */}
            <p className="font-medium text-lg my-auto ">${getOrderTotal(order)}</p>

            <div className="flex flex-col text-sm md:text-base text-black/60 ">
              <p>Method: {order.paymentType}</p>
              <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Order
