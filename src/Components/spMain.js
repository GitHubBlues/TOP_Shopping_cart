import React from "react";
import generateToyDB from "./toysDB.js";
import Quantity from "./setItemQuantity.js"
import { Board,
         Item,
         ItemImageContainer,
         ItemImg,
         ItemDescription,
         ItemPrice,
         ItemBtn,
         Controls} from "./spMain.style.js";

const ProductBoard = () => {
    const database = generateToyDB();
    
    function createItemCards() {
        let tmp = [];
        for (let i=0; i<database.length; i++) {
            tmp.push(
                <Item key={ database[i].id }>
                    <ItemImageContainer>
                        <ItemImg src={ database[i].name } alt={ database[i].desc }/>
                    </ItemImageContainer>
                    <ItemDescription>{ database[i].desc }</ItemDescription>
                    <ItemPrice>€{ database[i].price }</ItemPrice>
                    <Controls>                       
                        <Quantity/>
                        <ItemBtn>Add to cart</ItemBtn>
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

export default ProductBoard;