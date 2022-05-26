import styled from "styled-components";

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid grey;
`

export const ImageContainer = styled.div`
    
`

export const ItemImage = styled.img`
    display: flex;
    justify-content: left;
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin: 15px;
`

export const ItemName = styled.div`
    margin-left: 5px;
    margin-top: auto;
    margin-bottom: auto;
    font-size: x-large;
    font-family: sans-serif;
    width: 350px;
`

export const ItemNumber = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: row;
    margin: auto;
    font-size: x-large;
    font-family: sans-serif;
`


export const Operator = styled.div`

`

export const Symbol = styled.div`
    display: flex;
    justify-content: center;
    color: black;
    border-radius: 4px;
    background-color: lightsteelblue; 
    margin: 5px;
    padding: 5px;
    font-weight: bold;
    font-size: x-large;
    font-family: sans-serif;
`

export const Nitems = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    font-size: x-large;
    font-family: sans-serif;
    width: 45px;
`

export const ItemPrice = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    width: 50px;
    font-size: x-large;
    font-family: sans-serif;
`

export const Subtotal = styled.div`
    margin: auto;
    font-size: x-large;
    font-family: sans-serif;
`

export const Buy = styled.button`
    display: flex;
    align-items: center; 
    justify-content: center; 
    border-radius: 8px;
    border: 1px solid rgba(0,0,0,0);
    box-shadow: 0px 0px 8px 3px #999999;
    margin: 30px 40px auto auto;
    height: 50px;
    width: 130px;
    font-family: sans-serif;
    font-weight: 700;
    font-size: large;
    letter-spacing: 0.5px;
    background-color: rgba(210, 123, 68, 0.6);
    color: black;    
    
    &:hover {
        background-color: rgba(210, 123, 68, 0.4);
    }
`

export const NoteEmptyCart = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 150px;
    font-size: xx-large;
    font-weight: bold;
    font-family: sans-serif;
`