import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, hashHistory} from "react-router";
import Home from "./components/Home/Home";
import App from "./components/App";
import About from "./components/About.js";
import List from "./components/List/List";
import Contact from "./components/Contact"


var adios = ["hola", "adios"]
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home}></Route>
            <Route path="about" component={About}></Route>
            <Route path="list" component={List} hola={adios} ></Route>
            <Route path="contact" component={Contact}></Route>
        </Route>
    </Router>,
  document.getElementById('root')
);
