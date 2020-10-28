import React, {useState} from "react";
import "./Body.css";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";

const data = [
    {id: "001", name: "product1", description: "some text some text some text some text some text", price: "10",},
    {id: "002", name: "product2", description: "some text some text some text some text some text", price: "5.99",},
    {id: "003", name: "product3", description: "some text some text some text some text some text", price: "49.99",},
    {id: "004", name: "product4", description: "some text some text some text some text some text", price: "22.50",},
    {id: "005", name: "product5", description: "some text some text some text some text some text", price: "9.99",},
    {id: "006", name: "product6", description: "some text some text some text some text some text", price: "12.50",}
];

const Body = () => {

    const [checkQuantity, setCheckQuantity] = useState(0);
    const [dataCart, setDataCart] = useState([]);
    let className;

    function addCart (itemId) {
        const item = data.find((name ) => name.id === itemId);
        if (dataCart.includes(item)) {
            return
        }
        item.quantity = 1;
        setDataCart(dataCart => [...dataCart, item]);
    }

    function remove (itemId) {
        const item = dataCart.find(item => item.id === itemId);
        setDataCart(dataCart.filter(items => (items !== item)));
    }

    function change (item,quantity){
        setCheckQuantity(checkQuantity+1);
        item.quantity = quantity;
    }

    dataCart.length > 0 ?  className = "shop" : className = "full_shop";


    return (
        <div className="body">
            <Shop data={data} add={addCart} className={className} />
            <Cart data={dataCart} remove={remove} change={change} className={className}/>
        </div>
    )
}

export default Body