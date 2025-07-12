import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { useAppContext } from "../context/AppContext.jsx";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {
    User,
    setUser,
    setShowUserLogin,
    navigate,
    searchQuery,
    setSearchQuery,
    getCartAmount,
    getCartCount,
    axios
  } = useAppContext();

  const Logout = async () => {
   try {
      const {data} = await axios.get('/api/user/logout')
      if(data.success){
        toast.success(data.message)
        setUser(null)
        navigate('/')
      }else{
        toast.error(data.message)
      }
   } catch (error) {
      toast.error(error.message)
   }
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);

  return (
    <nav className="relative flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white transition-all">
      {/* Logo */}
      <NavLink to="/">
        <img className="h-9" src={assets.logo} alt="Logo" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-6 font-medium">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">All Product</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        {/* Search Box */}
        <div className="hidden lg:flex items-center border border-gray-300 px-3 py-1.5 rounded-full text-sm gap-2">
          <input
            type="text"
            className="bg-transparent w-full outline-none py-1 placeholder-gray-500"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="search" className="w-4 h-4" />
        </div>

        {/* Cart Icon */}
        <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
          <img src={assets.cart_icon} alt="cart" className="w-6 h-6 opacity-80" />
          <span className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] flex items-center justify-center rounded-full">
            {getCartCount()}
          </span>
        </div>

        {/* Login Button */}
        {!User ? (
          <button
            className="px-6 py-2 bg-primary hover:bg-primary-dull text-white rounded-full transition"
            onClick={() => setShowUserLogin(true)}
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <img src={assets.profile_icon} className="w-10" alt="profile_icons" />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40">
              <li
                onClick={() => navigate("my-orders")}
                className="p-1.5 pl-3 hover:bg-primary cursor-pointer"
              >
                My order
              </li>
              <li
                onClick={Logout}
                className="p-1.5 pl-3 hover:bg-primary cursor-pointer"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Menu + Cart Icon */}
      <div className="flex items-center gap-4 sm:hidden">
        {/* Cart Icon */}
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer p-2"
        >
          <img src={assets.cart_icon} alt="cart" className="w-6 h-6 opacity-80" />
          <span className="absolute -top-1.5 -right-1.5 text-[10px] text-white bg-primary w-[16px] h-[16px] flex items-center justify-center rounded-full">
            {getCartCount()}
          </span>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="p-2"
        >
          <img src={assets.menu_icon} alt="menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col gap-2 px-5 text-sm sm:hidden z-10">
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)}>
            All Product
          </NavLink>
          {User && (
            <NavLink to="/my-orders" onClick={() => setOpen(false)}>
              My orders
            </NavLink>
          )}
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
          {!User ? (
            <button
              className="mt-2 px-6 py-2 bg-primary hover:bg-primary-dull text-white rounded-full transition"
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
            >
              Login
            </button>
          ) : (
            <button
              className="mt-2 px-6 py-2 bg-primary hover:bg-primary-dull text-white rounded-full transition"
              onClick={Logout}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
