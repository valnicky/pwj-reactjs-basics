import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CartItems from './components/CartItems';
import CartTotal from './components/CartTotal';
import data from './Data';

function App() {

    const [cartItems, setCartItems] = useState(data);
    
    const [count, setCount] = useState(0);
    return ( < div className = "App" >
        <
        Header title = "Amazon Cart" / >
        
        <div className="App-main" >
            <p>
                You clicked {count} times
            </p>
            <button onClick={()=> setCount(count+1)}>Click me</button>
       <CartItems items= {cartItems}/>
          <CartTotal items={cartItems}/>
        </div>
        <
        /div >
    );

}

export default App;