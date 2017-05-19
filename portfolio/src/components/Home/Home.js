import React, {Component} from "react";
import {Title} from "./Home.style.js";
// import ReactRevealText from "react-reveal-text";


class Home extends Component{
    render(){
        return(
            <div style={{margin:"auto"}}>
                <Title>Una frase mas larga que la anterior</Title>
            </div>
        )
    }
};

export default Home;