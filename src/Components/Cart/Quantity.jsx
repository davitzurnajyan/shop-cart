import React, {useEffect, useState} from "react";

const Quantity = (props) =>{

    const data = props.data;
    const index = props.index;
    const item = data.find((name) => name.id === index);
    const [quantity, setQuantity] = useState(1)


   useEffect(()=>{
        props.change(item,quantity);
   },[quantity])

    return (
        <div className="product_quantity">
            <input type="number" value={quantity}
                   onChange={(e)=> e.target.value > 0 && setQuantity(+e.target.value)}/>
            <button onClick={()=>quantity > 1 && setQuantity(quantity-1)}>-</button>
            <button onClick={()=>setQuantity(quantity+1)}>+</button>
        </div>
    )

    }

    export default Quantity