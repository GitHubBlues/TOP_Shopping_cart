import React from "react";
import PropTypes from 'prop-types';
import generateToyDB from "./toysDB.js";
import { Item,
         ImageContainer,
         ItemImage,
         ItemName,
         ItemNumber,
         Operator,
         Symbol,
         Nitems,
         ItemPrice,
         Subtotal,
         NoteEmptyCart,
         Buy } from "./checkout.style.js";

const Checkout = ({ _quantity, _setQuantity, _setNtotal}) => {
  let quantity = _quantity; 
  let setQuantity = _setQuantity; 
  let setNtotal = _setNtotal; 

  const clonedQuantity = JSON.parse(JSON.stringify( quantity ));
  const database = generateToyDB();
  
  function total() {
    const database = generateToyDB();
    let totalPrice = 0;
    for (let i=0; i<19; i++){
      totalPrice = totalPrice + (quantity[i]*database[i].price)
    }
    return Math.round(totalPrice*10)/10;
  };

  function handleAddItem(e) {
    const id =e;
    clonedQuantity[ id ] = quantity[ id ]+1;
    setQuantity(clonedQuantity);
    const sum = clonedQuantity.reduce((partialSum, item) => partialSum + item, 0);
    setNtotal(sum);
};

function handleRemoveItem(e) {
    const id =e;
    clonedQuantity[ id ] = Math.max(quantity[ id ]-1, 0);
    setQuantity(clonedQuantity);
    const sum = clonedQuantity.reduce((partialSum, item) => partialSum + item, 0);
    setNtotal(sum);
};

  function checkoutCart() {
    let tmp = [];
    for (let i=0; i<20; i++) {
        if (quantity[i]>0){
          tmp.push(
            <Item key={ database[i].desc }>
                <ImageContainer>
                    <ItemImage src={ database[i].name } alt={ database[i].desc }  /> 
                </ImageContainer>
                <ItemName>{ database[i].desc }</ItemName>
                <ItemNumber>
                  <Operator onClick={() => {
                              handleRemoveItem(i); }}><Symbol>–</Symbol></Operator>
                  <Nitems>{ quantity[i] }</Nitems>
                  <Operator onClick={() => {
                              handleAddItem(i); }}><Symbol>+</Symbol></Operator>
                </ItemNumber>
                <ItemPrice>€{ database[i].price }</ItemPrice>
                <Subtotal>€{ Math.round( database[i].price*quantity[i]*10)/10 }</Subtotal>
            </Item>
          )
        }; 
      };    
    return tmp;
  };

    return (
      <div className="checkout-container">
            <div className='cko-main-title'> CHECKOUT </div>  
           { total() > 0 &&
              <div>
                <Item key="titles">
                    <div className='cko-title-img'> </div>   
                    <div className='cko-title-name'>Item</div>  
                    <div className='cko-title-q'>Quantity</div>  
                    <div className='cko-title-price'>Price </div>  
                    <div className='cko-title-subtotal'>Subtotal</div>        
                </Item>
                { checkoutCart() }
                <div>
                  <div className="cko-total">
                    <div className="total-label">TOTAL </div>  
                    <div className="total-label">€{ total() }</div>  
                  </div>
                  <Buy>BUY</Buy> 
                </div>              

              </div>  
            } 
            { total() == 0 &&
              <NoteEmptyCart>
                Your shopping cart is empty
              </NoteEmptyCart>             
            }
      </div>
    );
};

Checkout.propTypes = {
  _quantity: PropTypes.array,
  _setQuantity: PropTypes.func,
  _setNtotal: PropTypes.func,
};

export default Checkout;