import React from 'react';

import './NavBar.css'
import logo from '../../assets/venturusLogo.png'
import UserNav from './UserNav';



const NavBar = () => (
  <div className="navBar">
    <div className="logoAndTitle">
      <a href="/">
        <img Link to={'/'} className="logo" src={logo} alt="logo Venturus"></img>
      </a>
      <p className="text"> Squad Management Tool</p>
    </div>

    <UserNav/>
    
  </div>
);

export default NavBar;