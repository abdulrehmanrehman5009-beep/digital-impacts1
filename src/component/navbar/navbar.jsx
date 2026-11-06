import React from 'react'
import './navbar.css'

import image1 from './../../assets/Logo.jpg'
// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <>
    <div className="navbar">
        
        <img src={image1} alt="images" height={90} />
      <ul className="nav-list">
        <li>Home</li>
        <li>About us</li>
        <li>Portfolio</li>
        <li>Services</li>
      </ul>
      <button className="btn">Contact us</button>
    </div>
    </>
    
)}
export default Navbar        