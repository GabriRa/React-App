import styled,{keyframes} from "styled-components";
import Background from "../style/img/forest-fondo.jpg"

const revealAnimation = keyframes`
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
        background-color:rgba(0,0,0,0.1);
    }
    100%{
        box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3); 
        width:100%;
        z-index:-10;
        background-color:rgba(0,0,0,0.5);
    }
`; 

const colorTextAnimation = keyframes`
    0%{
        color:rgba(255,255,255,0.1);
    }
    100%{       
        color:rgba(255,255,255,1);
    }
`;

export const Title = styled.h1`
    color:rgba(0,0,0,0);
    text-tansform: uppercase;
    text-align:center;
    max-width:fit-contet;
    font-size: 30px;
    position: relative;
    padding:0.5em;
    z-index:1;
    animation:${colorTextAnimation} 2s 4.5s forwards;
        
    &:after{
        width:100%;
        content:"";
        height:100%;
        position:absolute;
        left:0;
        top:0;
        animation: ${revealAnimation} 4s 1.5s forwards;
        border-right: 4px solid black;
        transition:all 2s linear;
    }
    

`;

export const Container = styled.div`
    position:relative;
    height: fit-content;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center; 
    justify-content: center;
    padding:2em 0;

    .box-fondo{
        position: absolute;
        height: 100%;
        width:100%;
        min-height:fit-content;
        background-image: url(${Background});
        background-size:cover;
        background-position: center
    };
`;

export const Text = styled.div`
    z-index:10;
    margin:1em;
    padding:3em 4em;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height: fit-content;
    height: 40vh;
    width:80%;
    position:relative;
    color:#eee;
        p{      
        width:90%;
        min-width:300px;
        font-size:130%;
            &:after{
            width:100%;
            content:"";
            height:100%;
            background-color:rgba(0,0,0,0.6);
            position:absolute;
            left:0;
            top:0;
            animation: ${revealAnimation} 4s 5.5s forwards;
            border-right: 4px solid black;
        }
    }
`;