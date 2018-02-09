import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Shelves from "./components/Buttons/Shelves";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Shelves className="title-box" title="A" />
        <Shelves className="title-box" title="B" />
        <Shelves className="title-box" title="C" />
        <Shelves className="title-box" title="D" />
      </div>
    );
  }
}

export default App;
