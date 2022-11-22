import React from "react";
import PropTypes from 'prop-types';
import {Container,
        Operator,
        Number} from "./setItemQuantity.style.js"

const Quantity = ({ _quantity, _setQuantity, _setNtotal, _itemId }) => {
    const quantity = _quantity; 
    const setQuantity = _setQuantity; 
    const setNtotal = _setNtotal; 
    const id = _itemId;
    
    const clonedQuantity = JSON.parse(JSON.stringify( quantity ));

    function handleAddItem() {
        clonedQuantity[ id ] = quantity[ id ]+1;
        setQuantity(clonedQuantity);
        const sum = clonedQuantity.reduce((partialSum, item) => partialSum + item, 0);
        setNtotal(sum);
    };

    function handleRemoveItem() {
        clonedQuantity[ id ] = Math.max(quantity[ id ]-1, 0);
        setQuantity(clonedQuantity);
        const sum = clonedQuantity.reduce((partialSum, item) => partialSum + item, 0);
        setNtotal(sum);
    };

    return(
        <Container>
            <Operator id={"add_" + id} onClick={handleRemoveItem}>–</Operator>
            <Number>{quantity[ id ]}</Number>
            <Operator onClick={handleAddItem}>+</Operator>
        </Container>
    );
};


Quantity.propTypes = {
    _quantity: PropTypes.array,
    _setQuantity: PropTypes.func,
    _setNtotal: PropTypes.func,
    _itemId: PropTypes.number,
};


export default Quantity;