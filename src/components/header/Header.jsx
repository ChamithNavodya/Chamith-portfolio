import React from 'react';
import './header.css';
import CTA from './CTA';
import my1 from "../../assets/my1.png";
// import me from "../../assets/me.png";
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Chamith Navodya</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me overlay">
          <img src={my1} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header