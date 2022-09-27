import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt="" />
           <div>
            <a href="/home">Home</a>
            <a href="/home">About</a>
            <a href="/home">Contact</a>
            <a href="/home">Shop</a>
           </div>
        </nav>
    );
};

export default Header;