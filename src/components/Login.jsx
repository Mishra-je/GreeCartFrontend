

// import React from 'react';
// import { RxCross2 } from "react-icons/rx";
// import { useAppContext } from '../context/AppContext';
// import toast from 'react-hot-toast';

// const Login = () => {
//   const [state, setState] = React.useState("login");
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const { setShowUserLogin, setUser, axios, navigate } = useAppContext();

//   const OnSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(`/api/user/${state}`, { name, email, password }, { withCredentials: true });

//       if (data.success) {
//         if (state === 'register') {
//           toast.success(data.message || 'Registered successfully');
//           setState('login');
//         } else {
//           setUser(data.user);
//           navigate('/');
//           setShowUserLogin(false);
//           toast.success(data.message || 'Login successful');
//         }
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className="fixed top-0 left-0 bottom-0 right-0 flex items-center text-sm text-gray-600 bg-black/50 z-40">
//       <form onSubmit={OnSubmitHandler} className="relative flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
//         <button onClick={() => setShowUserLogin(false)} className="absolute top-4 left-4 bg-black/10 rounded-full p-1">
//           <RxCross2 className="text-2xl text-black cursor-pointer" />
//         </button>

//         <p className="text-2xl font-bold m-auto">
//           <span className="text-primary">User</span> {state === "login" ? "Login" : "Sign Up"}
//         </p>

//         {state === "register" && (
//           <div className="w-full">
//             <p className='text-black'>Name</p>
//             <input onChange={(e) => setName(e.target.value)} value={name} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" type="text" required />
//           </div>
//         )}

//         <div className="w-full">
//           <p className='text-black'>Email</p>
//           <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" type="email" required />
//         </div>

//         <div className="w-full">
//           <p className='text-black'>Password</p>
//           <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" type="password" required />
//         </div>

//         {state === "register" ? (
//           <p>Already have an account? <span onClick={() => setState("login")} className="text-primary cursor-pointer">click here</span></p>
//         ) : (
//           <p>Create an account? <span onClick={() => setState("register")} className="text-primary cursor-pointer">click here</span></p>
//         )}

//         <button className="bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer">
//           {state === "register" ? "Create Account" : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;




import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Login = () => {
  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setShowUserLogin, setUser, axios, navigate } = useAppContext();

  const OnSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/user/${state}`, { name, email, password }, { withCredentials: true });

      if (data.success) {
        if (state === 'register') {
          toast.success(data.message || 'Registered successfully');
          setState('login');
        } else {
          setUser(data.user);
          navigate('/');
          setShowUserLogin(false);
          toast.success(data.message || 'Login successful');
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSellerLogin = () => {
    setShowUserLogin(false);  // Close the user login modal if open
    navigate('/seller');      // Navigate to seller login page
  };

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 flex items-center text-sm text-gray-600 bg-black/50 z-40">
      <form onSubmit={OnSubmitHandler} className="relative flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
        <button onClick={() => setShowUserLogin(false)} type="button" className="absolute top-4 left-4 bg-black/10 rounded-full p-1">
          <RxCross2 className="text-2xl text-black cursor-pointer" />
        </button>

        <p className="text-2xl font-bold m-auto">
          <span className="text-primary">User</span> {state === "login" ? "Login" : "Sign Up"}
        </p>

        {state === "register" && (
          <div className="w-full">
            <p className='text-black'>Name</p>
            <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" type="text" required />
          </div>
        )}

        <div className="w-full">
          <p className='text-black'>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" type="email" required />
        </div>

        <div className="w-full">
          <p className='text-black'>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" type="password" required />
        </div>

        {state === "register" ? (
          <p>Already have an account? <span onClick={() => setState("login")} className="text-primary cursor-pointer">Click here</span></p>
        ) : (
          <p>Don&apos;t have an account? <span onClick={() => setState("register")} className="text-primary cursor-pointer">Create one here</span></p>
        )}

        <button type="submit" className="bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer">
          {state === "register" ? "Create Account" : "Login"}
        </button>

        {/* ✅ Seller Login Option */}
        <button
          type="button"
          onClick={handleSellerLogin}
          className="w-full mt-2 text-center text-primary underline hover:text-primary-dull"
        >
          Login as Seller
        </button>
      </form>
    </div>
  );
};

export default Login;

