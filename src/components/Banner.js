import React from 'react'
import bmw from '../assets/bmw.jpg'

const Banner = () => {
  /*
  let slideIndex = 0;
  showSlides();

  function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 10000); // Change image every 2 seconds
  }*/
  return (
    <div className="slideshow-container">

          <div className="mySlides">
          
            <img className="imgslide" src={bmw} alt='' style={{width:'100%'}}/>
            <div className="new_arrivals"><h1 className="glow">New Arrivals</h1></div>
          </div>
          {/*
          <div className="mySlides fade">
            
            <img className="imgslide" src={bmw} alt='' style={{width:'100%'}}/>
            <div className="new_arrivals"><h1 className="glow">New Arrivals</h1></div>
          </div>

          <div className="mySlides fade">
            
            <img className="imgslide" src={bmw} alt='' style={{width:'100%'}}/>
            <div className="new_arrivals"><h1 className="glow">New Arrivals</h1></div>
  </div>*/}

    </div>
  )
}

export default Banner