import React, { useState } from "react";
import Card from "./card"
import axios from "axios";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([])
  const handleSearch = async () => {
    console.log(searchQuery);
    const response = await axios.get(`https://dummyjson.com/products/search?q=${searchQuery}&limit=0`);
    setSearchData(response.data.products);
    console.log(response.products)
  };
  const handleProduct = (id) =>{
    console.log(id)
  }
  return (
    <div>
      <div className="flex justify-center items-center w-100%">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="rounded-l-xl p-4 border border-r-0 w-[70%] bg-gray-800 text-white"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-4 rounded-r-xl border border-l-0 "
        >
          Search
        </button>
      </div>
      <div className="">
      <div className="p-5 flex flex-wrap justify-start gap-4">
        {searchData.map((product, index) => (
          <Card key={index} product={product} remove={false} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default SearchBar;
