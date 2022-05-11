import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer,
         HeaderTitle,
         HeaderButtonContainer,
         HeaderButton,
         CartIcon
         } from "./header.style.js";

const Header = () => {
    
    // let redirect = useNavigate(); 

    // const handleRedirect =(e) => {
    //     const link = e.target.name;
    //     if (link==="home"){
    //         redirect("/home");
    //     } else if (link==="shop") {
    //         redirect("/shop");
    //     } else if (link==="contact") {
    //         redirect("/contact");
    //     } else if (link==="cart-outline") {    
    //         redirect("/checkout");
    //     }    
    // };

    return (
        <HeaderContainer>
            <HeaderTitle>The little pilot</HeaderTitle>
            <HeaderButtonContainer>
                <Link to="/">
                <HeaderButton>Home</HeaderButton>
                </Link>
                <Link to="/products">
                <HeaderButton>Shop</HeaderButton>
                </Link>
                <Link to="/contact">
                <HeaderButton>Contact</HeaderButton>
                </Link>
                <Link to="/checkout">
                <CartIcon> <ion-icon name="cart-outline" size="large"></ion-icon></CartIcon>
                </Link>
            </HeaderButtonContainer>
        </HeaderContainer>
    );
};

export default Header; 