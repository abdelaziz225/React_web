import React from 'react';
import '../Css/Nav.css';

function Navbar() {
  return (
    <nav className="navbar" >
    <div className="logo">Let Me Know</div>
    <ul className="nav-links">
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" className="hamburger">&#9776;</label>
      <div className="menu">
        <li    className='menulink'><a href="/">Home</a></li>
        <li className='menulink'><a href="#Skills">Skills</a></li>
        <li  className='menulink'><a href="/">Pricing</a></li>
        <li className='menulink' ><a href="/">Contact</a></li>
       <li  className='links'>
       <div className='social'>
        <p><a href="#" className="fa fa-facebook"></a> 
        <a href="https://www.linkedin.com/in/ahmad-abdelaziz-2521b6219" className="fa fa-linkedin"></a>
        <a href="https://www.instagram.com/_ahmadabdelaziz_/" className="fa fa-instagram"></a>
        </p>
      </div>
       </li>
      </div>
    </ul>
  </nav>
  );
}
export default Navbar;

