import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const Operator = styled.div`
    font-size: 16px;
    font-weight: 700;
    font-family: sans-serif;
    padding: 8px 12px;
    border: 2px solid grey;
    margin: 0px;
    background-color: #e0e0e0;

    &:hover {
        opacity: 0.7;
    }
`

export const Number = styled.div`
    font-size: 16px;
    font-weight: 700;
    font-family: sans-serif;
    padding: 8px 12px;
    border: 2px solid grey;
`