import React from 'react';
import './Header.css';

function header({ title }) {
    return ( <
        div className = "App-header" >
        <
        h1 > { title } < /h1> < /
        div >
    )
}

export default Header;