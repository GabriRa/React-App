import React, {Component} from "react";
import PendienteList from "./PendienteList"

class ItemList extends Component{
    render(){
        return(
            <div>
                <PendienteList prueba={this.props.prueba}/>
            </div>
        );
    };
};

export default ItemList;