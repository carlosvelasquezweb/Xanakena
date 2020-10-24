import React from 'react';
import './NavBar.css';

function NavBar() {
    return <div className="navbar">
            <a><i className="fi fi-shopping-basket"></i></a>
            <a href="#contact">Contactanos</a>
            <div className="subnav">
                <button className="subnavbtn">Nosotros</button>
            </div>
            <div className="subnav">
                <button className="subnavbtn">Productos</button>
            </div>
        </div>
  
}

export default NavBar;