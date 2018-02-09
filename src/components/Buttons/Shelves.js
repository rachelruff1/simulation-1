import React, { Component } from 'react';
import ('./Shelves.css');
// import axios from "axios";

export default class Shelves extends Component {
    constructor(props){
        super(props)
    }



render(){
    return(
        <div className = 'shelves'>
        <button onClick={this.getShelf} >{`Shelf ${this.props.title}`}</button>
        </div>
    )
}
}