import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Shelves from "./components/Shelves/Shelves";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Shelves className="shelf-box" title="A" />
        <Shelves className="shelf-box" title="B" />
        <Shelves className="shelf-box" title="C" />
        <Shelves className="shelf-box" title="D" />
      </div>
    );
  }
}

export default App;
