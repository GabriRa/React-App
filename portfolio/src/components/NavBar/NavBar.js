import React, {Component} from "react";
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

class NavBar extends Component{
    render(){
        const styleBoxNavBar = {
            width: "95%",
            margin: "auto",
            background: "#000",
        };
        const ejemplo = {
            width: "90%",
            margin:"auto"   
        }   
        const ejemplo2 = {
            margin:"0 6rem 0 0 "
        }
        return(
            <div style={styleBoxNavBar}>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header style={ejemplo2}>
                        <Navbar.Brand>
                            <a href="#/">My App</a>
                        </Navbar.Brand><Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse style={ejemplo}>
                        <Nav>
                            <LinkContainer to="home">
                                <NavItem eventKey={1} href="#/home">Home</NavItem>
                            </LinkContainer>
                            <LinkContainer to="about">
                                <NavItem eventKey={2} href="#/About">About</NavItem>
                            </LinkContainer>
                            <LinkContainer to="list">
                                <NavItem eventKey={2} href="#/list">List</NavItem>
                            </LinkContainer>
                            <NavDropdown eventKey={3} title="Menu Usuario?" id="basic-nav-dropdown">
                                Hacer algo o fuera
                                {/*<MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>*/}
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <LinkContainer to="contact">
                                <NavItem eventKey={1} href="#/contact">Contact</NavItem>
                            </LinkContainer>
                            <NavItem eventKey={2} href="#">Link Right</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
};

export default NavBar; 