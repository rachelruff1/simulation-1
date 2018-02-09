import React, { Component } from 'react';
import logo from './Shelfie-logo.png';
import ('./Header.css');

const Header = props => (
    <div className="header">
       <div className='logo'>
        <img
            src={logo} alt='logo'/>
        <span>SHELFIE</span>
        </div>
    </div>
)

export default Header;