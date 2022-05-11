import React from "react";
import { HeaderContainer,
         HeaderTitle,
         HeaderButtonContainer,
         HeaderButton,
         CartIcon
         } from "./header.style.js";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>The little pilot</HeaderTitle>
            <HeaderButtonContainer>
                <HeaderButton>Home</HeaderButton>
                <HeaderButton>Shop</HeaderButton>
                <HeaderButton>Contact</HeaderButton>
                <CartIcon> <ion-icon name="cart-outline" size="large"></ion-icon></CartIcon>
            </HeaderButtonContainer>
        </HeaderContainer>
    );
};

export default Header; 