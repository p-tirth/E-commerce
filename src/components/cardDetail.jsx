import React from "react";

const CardDetail = ({product}) => {
    console.log(product)
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p className="text-gray-600">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="text-xl text-gray-800">${product.price}</div>
          <div className="text-sm text-gray-500">{product.discountPercentage}% off</div>
        </div>
        <div className="mt-4">
          <span className="bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
            {product.brand}
          </span>
        </div>
      </div>
      <div className="flex justify-between p-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Add to Cart
        </button>
        <div className="text-gray-700 text-lg">{product.rating} ⭐</div>
      </div>
    </div>
  );
};

export default CardDetail;
