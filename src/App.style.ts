import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    margin:auto;
    width:100%;
    max-width:750px;
    padding:30px 0;

    @media (max-width:750px){
        flex-direction:column;
    }
`;

export const Info = styled.div`
    display:flex;
    flex-direction:column;

    @media (max-width:750px){
        align-items:center;
        margin-bottom:40px;
    }
`;

export const InfoLogo = styled.a`
    display:block
`;

export const InfoArea = styled.div`
    margin:20px 0;

    @media (max-width:750px){
        display:flex;
        justify-content:space-around;
        text-align: center;
    }

`;

export const GridArea = styled.div`
    flex:1;
    display:flex;
    justify-content: flex-end;

    @media (max-width:750px){
        justify-content:center;
        margin: 0px 20px;
    }
`;

export const Grid = styled.div`
    width:430px;
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media (max-width:750px){
        grid-template-columns: repeat(3, 1fr);
    }
`;

