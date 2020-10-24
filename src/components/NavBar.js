import React from 'react';
import './NavBar.css';
import CartIcon from './CartIcon';

function NavBar() {
    return <><div className="navbar">
        <CartIcon />
        <a href="#contact">Contactanos</a>
        <div className="subnav">
            <button className="subnavbtn">Nosotros</button>
        </div>
        <div className="subnav">
            <button className="subnavbtn">Productos</button>
        </div>
    </div>
    </>

}

export default NavBar;