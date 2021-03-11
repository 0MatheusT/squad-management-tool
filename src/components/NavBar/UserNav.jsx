import React from 'react';
import avatar from '../../assets/avatar.png'


import './UserNav.css'



const UserNav = () => (
  <div className="userNav">
    <p className="name">Matheus Tavares</p>
    <img className="logo" src={avatar} alt="Imagem de Usuário"></img>
  </div>
);

export default UserNav;