import React, { useEffect, useState } from "react";
import { readCart } from "../firebase/firebaseOperation";
import { useAuth0 } from "@auth0/auth0-react";
import Card from "../components/card";
import axios from "axios";

export default function Cart() {
  const { user } =  useAuth0();
  const [cart, setCart] = useState([]);

  const getProductFromId = async (id) =>{
    const response = await axios(`https://dummyjson.com/products/${id}`)
    // console.log(response)
    return response
  }
  const refreshCart = async () => {
    const updateCart = await readCart(user.sub) 
    const updateCartList = updateCart.id 
    const productPromises = updateCartList.map(getProductFromId)
    const cartItem = await Promise.all(productPromises);
    console.log(cartItem)
    setCart(cartItem)
  };
  useEffect(()=>{
    refreshCart()
  },[user])
  return (
    <div>
      <button
        onClick={refreshCart}
        className="border border-black m-3 p-3 bg-blue-500 text-white"
      >
        Refresh Cart
      </button>

      {cart.length>0?
      (<div className="p-5 flex flex-wrap justify-start gap-4">
        {cart.map((product, index) => (
          // <div key={index}>{product}</div>
          <Card key={index} product={product.data} remove={true}/>
        ))}
      </div>):(
      <div className="p-4 text-xl border border-black m-1 font-bold">
        Your Cart is empty
      </div>)}
    </div>
  );
}
