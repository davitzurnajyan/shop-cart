import React from "react";
const CartFooter = (props) => {
        let data = props.data;

        function proceed(){
                console.log(data)
        }

        return(
            <div className="cart_footer">
                <button onClick={proceed}>Proceed to Checkout</button>
            </div>
        )
}

export default CartFooter;