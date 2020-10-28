import React  from "react";
import "./Shop.css"
import ShopHeader from "./ShopHeader";
import ShopProducts from "./ShopProducts";

const Shop = (props) => {

        return(
            <div className={props.className}>
                <ShopHeader/>
                <ShopProducts data={props.data} add={props.add}/>
            </div>
        )

}

export default Shop