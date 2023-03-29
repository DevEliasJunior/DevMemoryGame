import styled from "styled-components";

type ContainerProps = {
    backgroundColor: boolean
}

export const Container = styled.div<ContainerProps>`
    background-color: ${ Props => Props.backgroundColor ? '#1550ff' : '#e2e3e3'};
    display:flex;
    justify-content:center;
    aligm-itens:center;
    border-radius: 10px;
    cursor:pointer;
`;


type IconProps = {
    opacity?: number
}
export const Icon = styled.img<IconProps>`
    width: 50px;
    height:auto;
    opacity: ${Props => Props.opacity? Props.opacity : 1}
`;