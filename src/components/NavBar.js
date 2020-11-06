import React from 'react';
import './NavBar.css';
import CartIcon from './CartIcon';
import {Link} from 'react-router-dom'

function NavBar() {
    return <><div className="navbar">
        <CartIcon />
        <Link to="/">Contactanos</Link>
        <div className="subnav">
            <Link to="/" className="subnavbtn">Nosotros</Link>
        </div>
        <div className="subnav">
            <Link to="/" className="subnavbtn">Productos</Link>
        </div>
    </div>
    </>

}

export default NavBar;