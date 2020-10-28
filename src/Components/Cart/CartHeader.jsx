import React from "react";

const CartHeader = () =>{

    return(
        <div className="cart_header">
            <h2>Your boat`s shopping cart</h2>
            <div className="cart_title">
                <h5>Product</h5>
                <h5>Price</h5>
                <h5>Quantity</h5>
            </div>
        </div>
    )
}

export default CartHeader