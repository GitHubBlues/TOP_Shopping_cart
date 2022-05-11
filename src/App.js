import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from './Components/header.js';
import ProductBoard from './Components/products.js';
import Landing from './Components/landing.js';
import Contact from "./Components/contact.js";
import Checkout from "./Components/checkout.js";
// import { LandingPage, 
//             // ContactPage,
// import{
//          } from "./App.style.js"


function App () {
   return (
         <BrowserRouter>
            <Header/>
            <Routes>
              <Route path="/" element={<Landing/>}/>
              <Route path="/products" element={<ProductBoard/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
        </BrowserRouter>
   );
};

export default App; 