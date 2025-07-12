import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true; //semd cookie in api request
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const [User, setUser] = useState(null);
  const [IsSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [CartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState({});

  // fetch seller status
  const fetchSeller = async () => {
    try {
      const { data } = await axios.get("/api/seller/is-auth");
      if (data.success) {
        setIsSeller(true);
      } else {
        setIsSeller(false);
      }
    } catch (error) {
      setIsSeller(false);
    }
  };

  // fetch user Auth Status ,User Data and Cart Items
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user/is-auth", {
        withCredentials: true,
      });
      console.log("Checking user ", data);
      if (data.success) {
        setUser(data.user);
        console.log("data user", data.user);
        setCartItems(data.user.cartItems || {});
      }
    } catch (error) {
      setUser(null);
    }
  };

  //fetchh all products : -
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/api/product/list");
      if (data.success) {
        setProducts(data.products);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addToCart = (itemId) => {
    let cartData = structuredClone(CartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Added to cart");
  };

  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(CartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart Updated");
  };

  const removeFromCart = (itemId) => {
    let cartData = structuredClone(CartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }
    setCartItems(cartData);
    toast.success("Removed from cart");
  };

  const getCartCount = () => {
    let count = 0;
    for (const item in CartItems) {
      count += CartItems[item];
    }
    return count;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const item in CartItems) {
      let itemInfo = products.find((product) => product._id === item);
      if (CartItems[item] > 0 && itemInfo) {
        totalAmount += itemInfo.offerPrice * CartItems[item];
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  };

  useEffect(() => {
    fetchUser();
    fetchSeller();
    fetchProducts();
  }, []);

  // Update database cart items : -
  // useEffect(() => {
  //     const updateCart = async () => {
  //         try {
  //             const {data} = await axios.post('/api/cart/update',{CartItems})

  //             if(!data.success){
  //                 toast.error(data.message)
  //             }
  //         } catch (error) {
  //             toast.error(error.message)
  //         }
  //     }

  //     if(User){
  //         updateCart();
  //     }
  // },[CartItems])

  useEffect(() => {
    const timeout = setTimeout(() => {
      const updateCart = async () => {
        if (User && User._id) {
          await axios.post("/api/cart/update", {
            userId: User._id,
            cartItems: CartItems,
          });
        }
      };
      updateCart();
    }, 500);

    return () => clearTimeout(timeout);
  }, [CartItems, User]);

  const value = {
    navigate,
    User,
    setUser,
    IsSeller,
    setIsSeller,
    setShowUserLogin,
    showUserLogin,
    products,
    currency,
    addToCart,
    updateCartItem,
    removeFromCart,
    CartItems,
    searchQuery,
    setSearchQuery,
    getCartAmount,
    getCartCount,
    axios,
    fetchProducts,
    setCartItems,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
