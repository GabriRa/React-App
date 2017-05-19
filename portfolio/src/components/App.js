import React, { Component } from 'react';
import NavBar from "./NavBar/NavBar"

class App extends Component {
  render() {
    const styleBodyApp = {
      width: "90%",
      margin:"auto",
      display:"flex",
      border: "1px solid #000"
    };
    return (
      <div className="App">
        <div>
          <NavBar />
        </div>
        <div style={styleBodyApp}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
