import React, { useState } from 'react';
import '../Css/Skills.css';
import Image1 from './1.png';
import Image2 from './2.png';
function Skills() {
  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [Image1, Image2];

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length);
  };
  return (
    <div className="slider"    id='Skills'>
      <button     style={{color: "blue" , fontSize: "50px"}} className="prev" onClick={previousImage}>&#10094;</button>
      <img src={images[currentImageIndex]} alt="Slider" />
      <button  style={{color: "blue" , fontSize: "50px"}}  className="next" onClick={nextImage}>&#10095;</button>
    </div>
  );

}

export default Skills;