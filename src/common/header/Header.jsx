import React from 'react';
import './Header.css';
import Navbar from './Navbar';
import Search from './Search';
import Head from './Head';

const Header = ( {cartItem} ) => {
    return (
    <>
      <Head />  
      <Search cartItem={cartItem} />   
      <Navbar />
    
     
    </>
    
    )
}

export default Header;