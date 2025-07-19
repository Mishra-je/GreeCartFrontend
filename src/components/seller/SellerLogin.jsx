// import { set } from "mongoose";
import React, { useState,useEffect } from "react";
// import { useAppContext } from "../../context/appContext.js";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";


const SellerLogin = () => {
  const { IsSeller, setIsSeller, navigate,axios } = useAppContext();
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = async(e) => {
      try {
          e.preventDefault();
          const {data} = await axios.post('/api/seller/login',{email,password})
          if(data.success){
            setIsSeller(true);
            toast.success("Successfully Login")
            navigate('/seller')
          }else{
            toast.error(data.message)
          }
      } catch (error) {
         toast.error(data.message)
      }
        
    }
    // console.log("is seller is ",IsSeller)
    useEffect(() => {
        if(IsSeller){
            navigate("/seller")

        }
    },[IsSeller])

    const showCredentials = () => {
      alert(`Email : admin@example.com  \nPassword: admin@123 \n I am only showing credentials for demo purpose`);
    }

  return !IsSeller &&  (
    <form onSubmit={onSubmitHandler}  className="min-h-screen flex items-center text-sm text-gray-600 ">
    <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200 ">
        <p className="text-2xl font-medium m-auto"><span className="text-primary">Seller</span> Login</p>
        <button onClick={showCredentials} className=" text-sm font-medium text-black border border-gray-300 p-1 rounded-xl " > Show👁️</button>
        <div className="w-full">
            <p>Email</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:border-primary" placeholder="Enter your email" required />
        </div>
        <div className="w-full">
            <p>Password</p>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:border-primary" placeholder="Enter your password" required />

        </div>
        <button  type="submit" className="w-full bg-primary text-white rounded-lg p-2 mt-4 hover:bg-primary/90 transition-all duration-200">Login</button>
    </div> 

    </form>
  );
};

export default SellerLogin;
