import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import ('./Shelves.css');
// import axios from "axios";


const Shelves =props => (

        <div className = 'shelves'>
        <Link to={`/bins/${props.title}`}><button>{`Shelf ${props.title}`}</button></Link>
        </div>
    )

    export default Shelves;