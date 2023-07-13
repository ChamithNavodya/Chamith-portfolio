import React from 'react'
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/ChamithNavodya" target='_blank' rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/chami_n_pathirana/" target='_blank' rel="noopener noreferrer"><RiInstagramFill /></a>
        <a href="https://www.facebook.com/chamithNavo/" target='_blank' rel="noopener noreferrer"><FaFacebookSquare /></a>
    </div>
  )
}

export default HeaderSocials