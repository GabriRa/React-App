import React, {Component} from "react";
import {ContactList, ToDoList} from "./type-of-list";
import {Panel, DropdownButton, MenuItem} from "react-bootstrap";


let typeOfComponent;
class AddItem extends Component {
    constructor(){
        super();
        this.state = {
            typeList: "1",
            panelTitle : <h3>Add a List</h3>
        }
        this.selectList = this.selectList.bind(this);
    }
    selectList(eventKey, event){
        this.setState({typeList:eventKey})
    }

    render(){
        typeOfComponent = this.state.typeList == "1" ? <ContactList/> : <ToDoList/>
        return(
            <Panel header={this.state.panelTitle}>
                <DropdownButton 
                ref="typeContact" 
                id="selectMedia" 
                title="Type of List" 
                onSelect={this.selectList}>
                    <MenuItem eventKey="1">Contact</MenuItem>
                    <MenuItem eventKey="2">To Do</MenuItem>
                </DropdownButton>
                <div>
                    {typeOfComponent}                    
                </div>
            </Panel>
        );
    }
}

export default AddItem;