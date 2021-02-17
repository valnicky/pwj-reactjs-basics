import React from 'react'
import './CartTotal.css';
import NumberFormat from 'react-number-format';

function CartTotal({ items }) {
    const getTotalPrice = () => {
        //init total price to 0
        //loop through all the items in the cart 
        //add the price of item with the quantity to the total price 
        //return the total  price 
        let total = 0;
        items.forEach((item) => {
            total += item.price*item.quantity;
        });
        return total;
    }
    
    
    const getTotalQuantity=()=>{
        let quant = 0;
          items.forEach((item)=>{
        quant += parseInt(item.quantity);
       
    });
     return quant;
    }
  

    return ( < div className = "CartTotal" >
        < h3 >
        Subtotal({ getTotalQuantity() } items): 
         <span className = "CartTotal-price" >
             < NumberFormat value = { getTotalPrice() }
                    displayType = { 'text' }
                    thousandSeparator = { true }
                    prefix = { '$' }
                    decimalScale = { 2 }></NumberFormat>
         </span> 
        </h3 >
        <button type = "" >
        Proceed to checkout </button> </div >
    )
}

export default CartTotal;