import React from "react";
import { Link } from "react-router-dom";

function CartIcon() {
  return (
    <>
     
        <Link to="/cart/"><i className="fi fi-shopping-basket"></i></Link>
      
    </>
  );
}

export default CartIcon;
