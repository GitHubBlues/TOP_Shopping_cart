import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    padding-top: 15px;
`

export const HeaderTitle = styled.h1`
    display: flex;
    margin-left:60px;
    padding: 0px;
    font-family: sans-serif;
    font-size: 40px;
    font-weight: 700;
    color: #D27B44;
    text-shadow: 0 0 1px red;
`

export const HeaderButtonContainer = styled.div`
    display: flex;
    margin-right: 60px;

`

export const HeaderButton = styled.button`
    display: flex;
    align-items: center; 
    justify-content: center;
    border-radius: 8px;
    border: 1px solid rgba(0,0,0,0);
    margin: auto 20px;
    height: 40px;
    width: 100px;
    font-size: large;
    background-color: rgba(255,255,255,0);
    font-family: sans-serif;
    font-weight: 700;
    font-size: large;
    letter-spacing: 0.5px;
    box-shadow: 0px 0px 8px 3px #C0C0C0;

    &:hover {
        background-color: rgba(240,240,240,0.35);
    }
`

export const CartIcon = styled.button`
    display: flex;
    align-items: center; 
    justify-content: center;
    margin: auto 50px;
    height: 40px;
    background-color: rgba(255,255,255,0);
    letter-spacing: 0.5px;
    box-shadow: 0px 0px 8px 3px #C0C0C0;
    border-radius: 8px;
    border: 1px solid rgba(240,240,240,0.35);

    &:hover {
        background-color: rgba(230,230,230,0.3);
    }
`