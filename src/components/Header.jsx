import React from 'react'
import logo from '../assets/statics/logo-platzi-video-BW2.png'
import userIcon from '../assets/statics/user-icon.png'
import '../assets/styles/Components/Header.scss'
const Header= ()=>(
  <header className="header">
        <img className="header__img" src={logo} alt="Logo-Platzi-Video"/>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt="user-icon"/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="">Cuenta</a></li>
                <li><a href="login.html">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>
)
export default Header