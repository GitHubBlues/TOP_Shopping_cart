import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { HeaderContainer,
         HeaderTitle,
         HeaderButtonContainer,
         HeaderButton,
         CartIcon
         } from "./header.style.js";

const Header = ( {quantity} ) => {
    const ntotal =  quantity;
    console.log(ntotal);
    return (
        <HeaderContainer>
            <HeaderTitle>The little pilot</HeaderTitle>
            <HeaderButtonContainer>
                <Link style={{textDecoration: 'none'}} to="/">
                    <HeaderButton>Home</HeaderButton>
                </Link>
                <Link style={{textDecoration: 'none'}} to="/products">
                    <HeaderButton>Shop</HeaderButton>
                </Link>
                <Link  style={{textDecoration: 'none'}} to="/contact">
                    <HeaderButton>Contact</HeaderButton>
                </Link>

                    <Link aria-label="Cart" style={{textDecoration: 'none'}} to="/checkout">
                        <CartIcon > 
                        { ntotal > 0 &&
                            <div className="bubble"><div className="items-cart">{ntotal}</div></div>
                        }    
                        { ntotal == 0 &&
                            <div className="no-bubble"><div className="no-items-cart">{ntotal}</div></div>
                        } 
                            <ion-icon name="cart-outline" size="large"></ion-icon>
                        </CartIcon > 
                    </Link>
                 
            </HeaderButtonContainer>
        </HeaderContainer>
    );
};

Header.propTypes = {
    quantity: PropTypes.number,
};

export default Header; 