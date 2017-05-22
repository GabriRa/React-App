import React, {Component} from "react";
import {Title, Container, Text} from "../style/Home.style.js";

class Home extends Component{
    render(){
        return(
            <Container>
                <div className="box-fondo">
                </div>
                <Title>Gabri Rabello</Title>
                <Title>Full Stack Developer</Title>

                <Text>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce purus arcu, 
                    pharetra id risus in, sagittis pretium augue. Donec sollicitudin turpis vitae 
                    mi accumsan pellentesque. Morbi a fermentum lacus. Aliquam eu massa a libero 
                    convallis bibendum et vitae tellus. Praesent sollicitudin, augue ac ultrices 
                    hendrerit, mauris odio suscipit lacus, et suscipit purus arcu non lectus. 
                    Vivamus suscipit, nibh non consequat sollicitudin, eros lectus ornare elit, 
                    vulputate blandit dolor orci mattis odio. Suspendisse imperdiet eu felis imperdiet 
                    lobortis. Nullam convallis nulla purus, sed ultricies sem finibus a. Aenean vitae 
                    maximus arcu. Sed laoreet sapien quis mauris vehicula, nec scelerisque nisl aliquam.</p>
                </Text>
                
            </Container>
        )
    }
};

export default Home;