import React from "react";
import Header from './Components/lpHeader.js';
import Main from './Components/lpMain.js';
import { LandingPage } from "./App.style.js"


function App() {
  return (
     <LandingPage>
       <Header />
       <Main />
     </LandingPage>
  );
}

export default App;