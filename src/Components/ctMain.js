import React from "react";
import { ContactBox,
         IconBox,
         ContactH1,
         IconItem } from "./ctMain.style.js";

const ContactContainer = ()=> {
     
    const address = "304 East Park Avenue, \r\n" + "Greenborough, Ireland";
    const email = "info@littlepilottoys.com";
    const phone = "353-8212499";

    return(
        <ContactBox>
            <ContactH1>{"Let's get in touch:"}</ContactH1>
            <IconBox>
                <IconItem><ion-icon name="location-sharp"></ion-icon> <span className="label">{ address }</span> </IconItem>
                <IconItem><ion-icon name="mail-sharp"></ion-icon> <span className="label">{ email }</span> </IconItem>
                <IconItem><ion-icon name="call-sharp"></ion-icon> <span className="label">{ phone }</span> </IconItem>
            </IconBox>   
       </ContactBox>    
    );
};

export default ContactContainer;