import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import generateToyDB from "./toysDB.js";
import Quantity from "./setItemQuantity.js"
import { Board,
         Item,
         ItemImageContainer,
         ItemImg,
         ItemDescription,
         ItemPrice,
         ItemBtn,
         Controls} from "./products.style.js";

const ProductBoard = ({ _quantity, _setQuantity, _setNtotal }) => {
    let quantity = _quantity; 
    let setQuantity = _setQuantity; 
    let setNtotal = _setNtotal; 
    const database = generateToyDB();

    function createItemCards() {
        let tmp = [];
        for (let i=0; i<database.length; i++) {
            tmp.push(
                <Item key={ database[i].id }>
                    <ItemImageContainer>
                        <ItemImg src={ database[i].name } alt={ database[i].desc } title={ database[i].desc } />
                    </ItemImageContainer>
                    <ItemDescription>{ database[i].desc }</ItemDescription>
                    <ItemPrice>€{ database[i].price }</ItemPrice>
                    <Controls>                       
                        <Quantity _quantity={ quantity } _setQuantity={ setQuantity } _setNtotal={ setNtotal } _itemId ={i}/>
                        <Link style={{textDecoration: 'none'}} to="/checkout">
                            <ItemBtn>Go to cart</ItemBtn>
                        </Link>    
                    </Controls> 
                </Item>   
            );
        }
        return tmp;
    }; 

    return(
        <Board>
            { createItemCards() }  
        </Board>
    );
};


ProductBoard.propTypes = {
    _quantity: PropTypes.array,
    _setQuantity: PropTypes.func,
    _setNtotal: PropTypes.func,
};


export default ProductBoard;