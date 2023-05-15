import React from 'react'
import IMG from "../../../assets/images/WhatsApp Image 2023-03-13 at 11.27 3.png"
import VIS from "../../../assets/icon/vision 1.png"
import Goal from "../../../assets/icon/goal 1.png"

const AboutContent = () => {
  return (
    <div className='about_container'>
      <div className='about_letter'>
        <div className='container'>
          <div>
            <img src={IMG} alt=''  style={{maxWidth: "100%"}} className='d-none d-lg-block'/>
          </div>
          <div className='column-two'>
            <p>
                The digitalized world we lIve in offers some amazing tools to enable an online
                hackathon but thereis nothing like experience of working on a project the whole night together
                with other crazy people. 
            </p>
          </div>
        </div>
      </div>
      <div className='value'>
          <div className='container'>
            <div className='content'>
              <div className='card' style={{background: "#000"}}>
                <div className='card_icon'>
                  <img src={VIS} alt='' style={{maxWidth: "90%"}}/>
                </div>
                <div>
                  <h4 style={{color: "#fff"}}>Our Vision</h4>
                </div>
                <div>
                  <p style={{color: "#fff"}}>
                    To become a leading international society that expolits fully the intellectual wealth of ICT
                    students to promete inclusive and sustainable national development
                  </p>
                </div>
              </div>
              <div className='card' style={{background: "#000"}}>
                <div className='card_icon'>
                  <img src={Goal} alt='' style={{maxWidth: "90%"}}/>
                </div>
                <div>
                  <h4 style={{color: "#fff"}}>Our Mission</h4>
                </div>
                <div>
                  <p style={{color: "#fff"}}>
                    To empower innovative and creative young students to promote human socio-economic development through application of affordable
                    and effective ICTs
                  </p>
                </div>
              </div>
              <div className='card' style={{background: "#000"}}>
                <div className='card_icon'>
                  <img src={Goal} alt=''  style={{maxWidth: "90%"}}/>
                </div>
                <div>
                  <h4 style={{color: "#fff"}}>Our Motto</h4>
                </div>
                <div>
                  <p style={{color: "#fff"}}>
                     Aspire Creativity and Innovation for Human
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutContent