import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { updateCart, readCart } from "../firebase/firebaseOperation";
// import { useNavigate } from "react-router-dom";

const Card = ({ product,remove }) => {
  console.log(remove)
  const { user } = useAuth0();
  let data;

  const handleCart = async (id) => {
    const docId = user.sub;
    const cartData = await readCart(docId);

    if (JSON.stringify(cartData) == "{}") {
      console.log("empty cart");
      data = { id: [Number(id)] };
    } else {
      data = { id: [...cartData.id, Number(id)] };
    }

    await updateCart(docId, data);
  };
  const removeFromCart = async (id) => {
    const docId = user.sub;
    const cartData = await readCart(docId);

    if (JSON.stringify(cartData) == "{}") {
      console.log("empty cart");
      data = { id: [Number(id)] };
    } else {
      data =  [...cartData.id] ;
      const removedId = data.splice(data.indexOf(id),1)
      console.log(removedId)
      data = { id: [...data,] };
      await updateCart(docId, data);
  }
}

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
     <div className="flex justify-end">
       <button
         onClick={() => {
           handleCart(product.id);
         }}
         className="p-2 w-fit m-1 rounded-md bg-blue-500 text-white font-semibold hover:text-slate-800"
       >
         Add to Cart
       </button>
       {remove && <button className="p-2 w-fit m-1 rounded-md bg-red-500 text-white font-semibold hover:text-slate-800" onClick={()=>{removeFromCart(product.id)}} >Remove</button>}
     </div>
    </div>
  );
};

export default Card;
