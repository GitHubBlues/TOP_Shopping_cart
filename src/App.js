import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/header.js';
import ProductBoard from './Components/products.js';
import Landing from './Components/landing.js';
import Contact from "./Components/contact.js";
import Checkout from "./Components/checkout.js";

function App () {
   const [ quantity, setQuantity ] = useState( new Array(19).fill(0) );
   const [ ntotal, setNtotal ] = useState(0);
   console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrr");
   console.log(quantity);

   return (
         <BrowserRouter>
            <Header quantity={ ntotal }/>
            <Routes>
              <Route path="/" element={<Landing/>}/>
              <Route path="/products" element={<ProductBoard _quantity={ quantity } _setQuantity={ setQuantity } _setNtotal={ setNtotal }/> }/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/checkout" element={<Checkout _quantity={ quantity } _setQuantity={ setQuantity } _setNtotal={ setNtotal }/>}/>
            </Routes>
        </BrowserRouter>
   );
};

export default App; 