import React, {Component} from "react";
import {Panel, FormGroup, FormControl, InputGroup, MenuItem, Row} from "react-bootstrap";

function añadirLista (e) {
    e.preventDefault();
    console.log(this);
}

export class ContactList extends Component {
    render(){
        return (
            <form onSubmit={añadirLista.bind(this)}>
                <FormGroup>
                    <InputGroup>
                        <FormControl ref="Name" type="text" placeholder="Name"/>
                    </InputGroup>                
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <FormControl ref="Contact" type="text" placeholder="Contact"/>
                        <FormControl ref="typeContact" componentClass="select" placeholder="Social Media">
                            <option value="Email">Email</option>
                            <option value="Instagram">Instagram</option>
                            <option value="GitHub">GitHub</option>
                        </FormControl>
                    </InputGroup>
                </FormGroup>
                <input type="submit"/>
            </form>            
        );
    }
};

export class ToDoList extends Component {
    render(){
        return (
            <form onSubmit={añadirLista}>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" placeholder="List Name"/>
                    </InputGroup>                
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" placeholder="List Name"/>
                    </InputGroup>                
                </FormGroup>
                <input type="submit"/>
            </form>            
        );
    }
};