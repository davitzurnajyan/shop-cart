import React from "react";
import Quantity from "./Quantity";
import Price from "./Price";

const CartBody = (props) => {
    const data = props.data;

    function removeProduct(index){
        props.remove(index);
    }

    let product = data.map((product) =>
        <div key={product.id} className="cart_product">
            <div className="product_body">
                <div className="product_title">
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                </div>
                <h5>{product.price}</h5>
                <Quantity data={data} index={product.id} change={props.change}/>
            </div>
            <div className="product_footer">
                <button onClick={()=> {removeProduct(product.id)}}>Remove</button>
            </div>

        </div>
    )

    return(
        <div className="cart_body">
            <div className="cart_products"> {product} </div>
            <Price data={data}/>
        </div>
    )
}

export default CartBody