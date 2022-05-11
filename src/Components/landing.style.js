import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: 10px;
    top: 100px;
    left: 10px;
    right: 10px;
    margin: 60px;
`

export const TextContainer = styled.div`
    display: flex;
    flex:  1 1 auto;
    flex-direction: column;
    margin: 60px;
`

export const Title = styled.p`
   font-size: 45px;
   font-weight: 900;
   font-family: sans-serif;
   margin: 0px;
   margin-bottom: 35px;
   letter-spacing: 0.5px;
`

export const Textbox = styled.p`
    font-family: sans-serif;
    margin: 0px;
    white-space: pre-line;
    font-size: ${props => props.size || '30px'};
    font-weight: ${props => props.weight || '700'};
    margin-bottom: ${props => props.margin || '15px'};
    letter-spacing: 0.5px;
`

export const ShopBtn = styled.p`
    display: flex;
    align-items: center; 
    justify-content: center;
    border-radius: 8px;
    border: 1px solid rgba(0,0,0,0);
    margin: auto 10px;
    margin-top: 30px;
    height: 50px;
    width: 130px;
    font-family: sans-serif;
    font-weight: 700;
    font-size: large;
    background-color: rgba(210, 123, 68, 0.6);
    letter-spacing: 0.5px;
    box-shadow: 0px 0px 6px 5px #C0C0C0;

    &:hover {
        background-color: rgba(210, 123, 68, 0.4);
    }
`

export const ImageContainer = styled.div`
    display: flex;
    flex:  1 1 auto;
    margin: auto;
    padding: 60px;
    width: 300px;
   
`

export const Image = styled.img`
   
`