import React from 'react'
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
    <div className='container'>
        <div id="left">
        <h2 className='logo'>Floant</h2>
        <li>Everything</li>
        <li>Plants</li>
        <li>Flowers</li>
        </div>
        <div id="right">
           
                <li>About</li>
                <li>Contact</li>
                <li> 🛒</li>
                <li>👤</li>
           
        </div>
        </div>
        </>
    
  )
}

export default Navbar
