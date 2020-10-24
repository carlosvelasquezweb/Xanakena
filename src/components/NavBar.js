import React from 'react';
import './NavBar.css';

function NavBar() {
    return <>
            
            <a href="#contact">Contactanos</a>
            <div className="subnav">
                <button className="subnavbtn">Nosotros</button>
            </div>
            <div className="subnav">
                <button className="subnavbtn">Productos</button>
            </div>
        </>
  
}

export default NavBar;