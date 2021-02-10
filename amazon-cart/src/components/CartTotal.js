import React from 'react'
import './CartTotal.css';

function CartTotal({ items }) {
    const getTotalPrice = () => {
        //init total price to 0
        //loop through all the items in the cart 
        //add the price of item with the quantity to the total price 
        //return the total  price 
        let total = 0;
        items.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    }

    return ( <
        div className = "CartTotal" >
        <
        h3 >
        Subtotal({ items.length }
            items):
        <
        span className = "CartTotal-price" > $ { getTotalPrice() } < /span> < /
        h3 >
        <
        button type = "" >
        Proceed to checkout <
        /button> < /
        div >
    )
}

export default CartTotal