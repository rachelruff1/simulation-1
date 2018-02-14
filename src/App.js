import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Shelves from "./components/Buttons/Shelves";
import routes from './routes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Shelves className="title-box" title="A" />
        <Shelves className="title-box" title="B" />
        <Shelves className="title-box" title="C" />
        <Shelves className="title-box" title="D" />
        {routes}
      </div>
    );
  }
}

export default App;
