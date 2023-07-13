import React from 'react'
import './footer.css'
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer_logo'>Chamith</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        {/* <li><a href="#portfolio">Portfolio</a></li> */}
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://github.com/ChamithNavodya" target='_blank' rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/chami_n_pathirana/" target='_blank' rel="noopener noreferrer"><RiInstagramFill /></a>
        <a href="https://www.facebook.com/chamithNavo/" target='_blank' rel="noopener noreferrer"><FaFacebookSquare /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Chamith Navodya. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer