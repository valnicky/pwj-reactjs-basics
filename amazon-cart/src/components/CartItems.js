import React from 'react'
import './CartItems.css';

function cartItems({ items }) {
    return ( < div className = "CartItems" >
            <
            h1 > Shopping Cart < /h1><hr> <
            div className = "CartItems-items" > {
                items.map((item, index) => < CartItem item = { item }
                    key = { index }
                    / > ) } < /
                    div > <
                    /
                    div >
                )
            }

            export default cartItems;