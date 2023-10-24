import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { Auth0Provider } from "@auth0/auth0-react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Cart from "./pages/cart.jsx";
import Product from "./pages/product.jsx"
import Profile from "./pages/profile.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="product" element={<Product />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-trkapndmg1uz8x2j.us.auth0.com"
    clientId="kFaU4LcuojB4ZlmjpyGYX7q4H5ntNBan"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
