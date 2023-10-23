import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold">Shop</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="/products" className="text-gray-700">Products</a></li>
              <li><a href="/categories" className="text-gray-700">Categories</a></li>
              <li><a href="/brands" className="text-gray-700">Brands</a></li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold">Support</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="/contact" className="text-gray-700">Contact Us</a></li>
              <li><a href="/faq" className="text-gray-700">FAQ</a></li>
              <li><a href="/returns" className="text-gray-700">Returns</a></li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="mt-2 space-x-4">
              <a href="#" className="text-blue-500 hover:underline"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-blue-500 hover:underline"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-blue-500 hover:underline"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
