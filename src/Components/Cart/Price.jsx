import React from "react";
const Price = (props) => {
    let data = props.data;
    let price = 0;

    data.forEach((product) =>
        price = price + (product.quantity * product.price)
    )

    return(
        <div className="cart_price">
            <div>
                <h6>Price before <u>VAT</u>:</h6>
                <span>{`€${price.toFixed(2)}`}</span>
            </div>
            <div>
                <h6>VAT @ <strong>20%</strong>:</h6>
                <span>{`€${(price/5).toFixed(2)}`}</span>
            </div>
            <div>
                <h6>Total to be paid:</h6>
                <span>{`€${(price * 1.2).toFixed(2)}`}</span>
            </div>
        </div>
    )

}

export default Price;