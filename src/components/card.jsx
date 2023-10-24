import React from "react";
// import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  // const navigate = useNavigate();
  return (
    <div className="max-w-sm rounded shadow-lg flex flex-col justify-center p-1 relative">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="max-h-[300px]"
        //   onClick={()=>{navigate(`product/${product.id}`)}}
      />
      <div className="">
        <div className="font-bold text-xl">{product.title}</div>
      </div>

      <div className="">
        <span className=" bg-gray-200 rounded-full text-sm font-semibold text-gray-700">
          {product.brand}
        </span>
      </div>

      <div className="">
        <span className="text-gray-700 text-base">Price: ${product.price}</span>
        <span className="text-gray-700 text-base">
          Rating: {product.rating}
        </span>
      </div>

      <div className="">
        <span className="text-green-500 text-base">
          {product.discountPercentage}% off
        </span>
      </div>
      <button
        // onClick={handleCart(product.id)}
        className="p-2 w-fit absolute right-5 bottom-5 rounded-md bg-blue-500 text-white font-semibold hover:text-slate-800"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
