import React from "react";
import Header from './Components/lpHeader.js';
// import Main from './Components/lpMain.js';
// import { LandingPage, 
import{
         ContactPage } from "./App.style.js"
import ContactContainer from "./Components/ctMain.js";

function App() {
  return (
    // <LandingPage>
    //    <Header />
    //    <Main />
    // </LandingPage>
       <ContactPage>
           <Header />   
           <ContactContainer /> 
       </ContactPage>
  );
}

export default App; 
