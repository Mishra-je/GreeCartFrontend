import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const [count, setCount] = React.useState(0);
  const { currency, addToCart, updateCartItem, removeFromCart, CartItems, navigate } = useAppContext();

  return product && (
    <div onClick={() => {navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
          scrollTo(0, 0)}}
     className="w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-300 p-4 shadow-sm transition hover:shadow-md">
      {/* Product Image */}
      <div className="group cursor-pointer flex items-center justify-center">
        <img
          className="group-hover:scale-110 transition-transform duration-300 h-40 object-contain"
          src={product.image[0]}
          alt={product.name}
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 text-gray-600 text-sm">
        <p>{product.category}</p>
        <p className="text-gray-800 font-semibold text-lg truncate">{product.name}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1">
          {Array(5).fill('').map((_, i) => (
            <img
              key={i}
              src={i < 4 ? assets.star_icon : assets.star_dull_icon}
              alt=""
              className="w-3.5"
            />
          ))}
          <p className="text-xs text-gray-500">(4)</p>
        </div>

        {/* Price & Cart Buttons */}
        <div className="flex items-end justify-between mt-4">
          <p className="text-base md:text-lg font-medium text-primary">
            {currency}{product.offerPrice}
            <span className="text-xs text-gray-400 line-through ml-1">
              {currency}{product.price}
            </span>
          </p>

          <div className="text-primary" onClick={(e) => e.stopPropagation()}>
            {!CartItems[product._id] ? (
              <button
                className="flex items-center gap-1 px-2 py-1 border border-primary text-primary text-sm rounded-md hover:bg-primary/10"
                onClick={() => addToCart(product._id)}
              >
                <img src={assets.cart_icon} alt="cart-icon" className="w-4" />
                Add
              </button>
            ) : (
              <div className="flex items-center gap-2 px-2 py-1 bg-primary/10 rounded-md text-sm">
                <button onClick={() => removeFromCart(product._id)} className="px-2 font-medium">
                  -
                </button>
                <span>{CartItems[product._id]}</span>
                <button onClick={() => addToCart(product._id)} className="px-2 font-medium">
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
