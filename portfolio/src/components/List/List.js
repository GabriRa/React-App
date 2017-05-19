import React, {Component} from "react";
import ItemList from "./ItemList/ItemList.js"
import AddItem from "./AddItems/add-item"

class List extends Component{
    render(){
        const listOfItems = this.props.route.hola.map(algo => {
            return (
                <ItemList prueba={algo} key={algo}/>
            );
        })

        const styleAddItem = { 
            display:"flex",
            padding:"1em"
        };
        return(
            <div style={styleAddItem}>
                <AddItem />
                <div>
                    {listOfItems}                    
                </div>
            </div>
        );
    };
};

export default List;