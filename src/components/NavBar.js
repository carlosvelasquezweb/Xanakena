import React from 'react';
import './NavBar.css';
import CartIcon from './CartIcon';

function NavBar() {
    return <><div className="navbar">
        <CartIcon />
        <a href="#contact">Contactanos</a>
        <div className="subnav">
            <a className="subnavbtn">Nosotros</a>
        </div>
        <div className="subnav">
            <a className="subnavbtn">Productos</a>
        </div>
    </div>
    </>

}

export default NavBar;