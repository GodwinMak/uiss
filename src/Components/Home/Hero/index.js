import React from 'react'
import "./style.css"
import Logo  from "../../../assets/icon/lo 1.png"
const Hero = () => {
  return (
     <div className='hero' id='hero'>
          <div className='content'>
               <div className='par_one'>
                Welcome UISS
              </div>
              <div className='logo'>
                <img src={Logo} alt=''/>
              </div>

        <div className='request'>
          <p>Join a Student Community that Fuels Creativity and Drives Innovation</p>
        </div>
          </div>
       
    </div>
  )
}

export default Hero