import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-bold text-white">
            My E-Commerce
          </NavLink>
          <div className="space-x-4">
            <NavLink to="/product" className="text-white">
              Products
            </NavLink>
            <NavLink to="/cart" className="text-white">
              Cart
            </NavLink>
            <NavLink to="/Profile" className="text-white">
              Profile
            </NavLink>
            {!isAuthenticated ? (
              <button
                className="border-2 border-black text-white font-bold bg-red-600 p-1 rounded-md"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            ) : (
              <span>
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                  className="border-2 border-black text-white font-bold bg-red-600 p-1 rounded-md"
                >
                  Log Out
                </button>
                <div className="border-2 border-black text-black font-bold bg-yellow-400 p-1 rounded-md w-fit">
                  Welcome , {user.name}
                </div>
              </span>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
