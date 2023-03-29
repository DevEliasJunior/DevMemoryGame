
import styled from "styled-components";

export const Container = styled.div`
    font-family: sans-serif;
    background-color: #1550ff;
    display:flex;
    align-items:center;
    transition: linear .3s;
    border-radius: 5px;
    width:170px;
    height:40px;

    &:hover {
        opacity: 0.5
    }
`;

export const iconArea = styled.div`
    width: 30%;
    display:flex;
    justify-content:center;
`;

export const icon = styled.img`
    height: 20px
`;

export const label = styled.div`
    flex:1;
    display:flex;
    font-size:14px;
    justify-content:center;
    align-items:center;
    color: #fff;
    height:inherit;
    border-left: 1px solid #fff;
`;