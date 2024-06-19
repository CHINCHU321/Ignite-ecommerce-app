import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import AuthContext from '../context/AuthContext';

function Navbar(){
  const { user, logout } = useContext(AuthContext);

    return (
      <nav>
         <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      {user ? (
        <>
        <span>{user.name}</span>
        <button onClick={logout}>Logout</button>
        </>
      ):(
        <>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
        </>
      )
      }
      </nav>
    )
  }

export default Navbar;