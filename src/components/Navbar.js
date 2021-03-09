import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import logo from '../images/NavLogo.jpg'

const Navbar = () =>{
  return (
    <nav className="ui secondary menu">
      // <img src="/images/NavLogo.jpg" width={60}/>
      <img src={logo} width={60}/>
      <Link className="item" to="/">Home</Link>
      <Link className="item" to="/dish">About Us</Link>
      <Link className="item" to="/community">Feedback</Link>
    </nav>
  )
}


export default Navbar;
