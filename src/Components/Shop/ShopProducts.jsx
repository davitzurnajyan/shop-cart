import React from "react";

const ShopProducts = (props) => {

    function addToCart(index){
        props.add(index);
    }

   let  data = props.data;

   let products = data.map((product)=>
        <div key={product.id} className="shop_product">
            <div className="shop_product_body">
                <h5>{product.name}</h5>
                <p>{product.description}</p>
            </div>
            <div className="shop_product_footer">
                <button onClick={ () => {addToCart(product.id)}} >Add to cart</button>
                <h6>€{product.price}</h6>
            </div>
        </div>
   );

        return(
            <div className="shop_products">
                {products}
            </div>
        )
}

export default ShopProducts