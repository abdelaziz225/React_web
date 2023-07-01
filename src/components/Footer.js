import React from 'react';
import '../Css/Footer.css';

function Footer() {
  return (
   <footer>
    <div className='contanier'>
      <div className='sub1'>
        <h2>if you have any question you can send your email and we well contact with you</h2>
      </div>
      <div>
      <form class="search-wrapper cf">
        <input type="text" placeholder="Email Address" />
        <button type="submit">Get Started</button>
      </form>
      </div>
    </div>
    <div className='social'>
        <h1>Let Me Know</h1>
        <p><a href="#" className="fa fa-facebook"></a> 
        <a href="https://www.linkedin.com/in/ahmad-abdelaziz-2521b6219" className="fa fa-linkedin"></a>
        <a href="https://www.instagram.com/_ahmadabdelaziz_/" className="fa fa-instagram"></a>
        </p>
      </div>
      <p className='copy'>Copyrights 2023</p>
   </footer>
  );
}

export default  Footer;

