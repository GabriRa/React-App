import styled from "styled-components";
import {keyframes} from "styled-components";

const animationKF = keyframes`
    0%{
        width:100%;
        z-index:10;
    }
    50%{
        width:0%;
        z-index:10;
    }
    51%{
        width:0%;
        z-index:-10;
    }
    100%{
        width:100%;
        z-index:-10;
    }
`; 

export const Title = styled.h1`
    text-tansform: uppercase;
    text-align:center;
    width:fit-contet;
    font-size: 30px;
    color:#ff3333;
    position: relative;
    padding:1em;
    z-index:1;

    &:after{
        content:"";
        width:100%;
        height:100%;
        background-color:yellow;
        position:absolute;
        left:0;
        top:0;
        animation: ${animationKF} 2s 1.5s forwards;
    }

`;
