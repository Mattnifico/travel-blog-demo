import './hero.css';
import React from 'react';
import logoImage from '../../assets/Lunar Landers Logo.png';
import bgImage from '../../assets/HeroSection-bg-image.jpg';

function Hero() {
  return (
    <hero className="Hero">
      <div className='heroImage'>
        <img src={bgImage} alt="Image 1" />
      </div>
        <img src={logoImage} className='headerIcon' alt="Lunar Landers Logo" />
        <h1 className='headerTitle'>Lunar Landers: Earth Escapades</h1>
        <h1 className='headerSummary'>Here at Lunar Landers, we don't just have fun on the moon, we bring the fun to earth!</h1>
    </hero>
  );
}

export default Hero;