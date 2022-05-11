import React from "react";
import {Container,
        Operator,
        Number} from "./setItemQuantity.style.js"

const Quantity = () =>{

    return(
        <Container>
            <Operator>–</Operator>
            <Number>1</Number>
            <Operator>+</Operator>
        </Container>
    );
};

export default Quantity;