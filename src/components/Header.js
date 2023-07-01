import React, { useState, useEffect } from 'react';
import '../Css/Header.css';

function Header() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const textArray = [' We hope you will benefit greatly from your studies with us ', 'We have all courses related to programming', 'We also have online and offline courses'];
  useEffect(() => {
    const typingInterval = 100;
    const deletingInterval = 50;
    const pauseInterval = 250;
    let timerId;

    const type = () => {
      const currentIndex = index % textArray.length;
      const currentText = textArray[currentIndex];
      if (!isDeleting) {
        setText(currentText.substring(0, text.length + 1));
      } else {
        setText(currentText.substring(0, text.length - 1));
      }
      if (!isDeleting && text === currentText) {
        setIsDeleting(true);
        timerId = setTimeout(() => {
          setIsDeleting(true);
        }, pauseInterval);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex(index + 1);
      }
      timerId = setTimeout(type, isDeleting ? deletingInterval : typingInterval);
    };

    timerId = setTimeout(type, pauseInterval);

    return () => clearTimeout(timerId);
  }, [text, index, isDeleting, textArray]);

  return (
    <div className='firstdiv'>
      <div className="wrapper">
        <div className="centeredBox">
          <p>Hello To Our Website </p>
          <span>{text}</span>
          <span className="cursor"></span>
        </div>
      </div>
      <div className='img'>
        <img   className='astrounot'  src='https://png.pngtree.com/png-clipart/20220709/ourmid/pngtree-book-color-open-book-stack-books-png-image_5836804.png' alt=''  /> 
      </div>
    </div>
  );
}
export default Header;