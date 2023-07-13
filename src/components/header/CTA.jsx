import React from 'react'
import Chamith from '../../assets/Chamith.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Chamith} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA