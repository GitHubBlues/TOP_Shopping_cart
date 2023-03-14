import React from "react";
import '../index.css';
import { PopupContainer,
         PopupText
        } from "./popup.style.js"


const Popup = () => {
   
    return (
        <PopupContainer>
           <PopupText>
               {/* `&quot;`This is a fake store ... /n No purchasees possible! `&quot;` */}
              <div className="textMessage">{"This is a fake store ..."}</div>
              <div className="textMessage">{"No purchases possible!"}</div>
           </PopupText>
        </PopupContainer>
    );
};

export default Popup; 