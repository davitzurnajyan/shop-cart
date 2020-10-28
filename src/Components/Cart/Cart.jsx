import React from "react";
import "./Cart.css";
import CartBody from "./CartBody";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";

const Cart = (props) => {

        return(
            <div className={`cart_${props.className}`}>
               <CartHeader/>
               <CartBody data={props.data} remove={props.remove} change={props.change}/>
               <CartFooter data={props.data}/>
            </div>
        )

}

export default Cart