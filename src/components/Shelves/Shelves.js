import React, { Component } from 'react';
import ('./Shelves.css');

export default class Shelves extends Component {
    constructor(props){
        super(props)
    }

render(){
    return(
        <div className = 'shelves'>
        <button>{`Shelf ${this.props.title}`}</button>
        </div>
    )
}
}