import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';
function Navbar(){

    return (
      <nav>
         <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      </nav>
    )
  }

export default Navbar