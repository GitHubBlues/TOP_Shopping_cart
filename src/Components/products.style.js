import styled from "styled-components";

export const Board = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;

`

export const Item = styled.div`
    border-radius: 10px;
    box-shadow: 0px 0px 12px 2px grey;
    background-color: white;
    padding: 20px;
    width: 370px;
    margin: 25px;
`

export const ItemImageContainer = styled.div`

`

export const ItemImg = styled.img`
    height: 260px;
    width: 320px;
    padding: 25px;
    object-fit: contain;
    user-drag: none;
`

export const ItemDescription = styled.p`
    font-size: 24px;
    font-weight: 800;
    font-family: sans-serif;
    margin: 0px;
    margin-top: 8px;
`

export const ItemPrice = styled.p`
    font-size: 24px;
    font-weight: 500;
    font-family: sans-serif;
    margin: 10px 0px;
    letter-spacing: 0.8px;
`

export const ItemBtn = styled.button`
    font-size: 16px;
    font-weight: 700;
    font-family: sans-serif;
    padding: 8px 12px;
    background-color: #e0e0e0;

    &:hover {
        opacity: 0.7;
    }
`

export const Controls = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    margin-bottom: 10px;
`
