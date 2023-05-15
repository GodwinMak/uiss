import React from 'react'
import { Col, Row} from 'react-bootstrap'
import IMG from "../../../assets/images/WhatsApp Image 2023-05-09 at 17.30.20.jpg"
import Coca from "../../../assets/icon/logo-coca-cola.png"
import Godrej from "../../../assets/icon/logo-godrej.png"
import Oppo from "../../../assets/icon/logo-oppo.png"
import Paypal from "../../../assets/icon/logo-paypal.png"
import Red from "../../../assets/icon/logo.png"
import Icon from "../../../assets/icon/computer 1.png"
import { useNavigate } from 'react-router-dom'

const HomeContent = () => {
  const navigate = useNavigate()
  return (
    <div className='home_container'>
        <div className='news_letter'>
            <div className='container'>
                <div>
                    <img src={IMG} alt=''  style={{maxWidth: "100%"}} className='d-none d-lg-block'/>
                </div>
                <div className='column-two'>
                    <p>
                        Dear beloved UISS members and stakeholder,
                        I feel honored and privileged to welcome you all to the University of Dar es Salaam ICT Students’ Society (UISS). 
                    </p>
                </div>
            </div>
        </div>
        <div className='partners'>
            <h2>Our Partner</h2>
            <div className='partner_icons'>
                <img src={Red} alt=''/>
                <img src={Coca} alt=''/>
                <img src={Godrej} alt=''/>
                <img src={Paypal} alt=''/>
                <img src={Oppo} alt=''/>
            </div>
        </div>
        <div className='value'>
          <div className='container'>
            <h2>Our Values</h2>
            <div className='content'>
              <div className='card'>
                <div className='card_icon'>
                  <img src={Icon} alt='' style={{maxWidth: "90%"}}/>
                </div>
                <div>
                  <h4>Creativity</h4>
                </div>
                <div>
                  <p>
                    Members of the Society believe in using imaginations and original ideas to create outstanding products
                  </p>
                </div>
              </div>
              <div className='card'>
                <div className='card_icon'>
                  <img src={Icon} alt='' style={{maxWidth: "90%"}}/>
                </div>
                <div>
                  <h4>Innovation</h4>
                </div>
                <div>
                  <p>
                    Our belief is that new ways of using technology can help to address common practical problems
                  </p>
                </div>
              </div>
              <div className='card'>
                <div className='card_icon'>
                  <img src={Icon} alt=''  style={{maxWidth: "90%"}}/>
                </div>
                <div>
                  <h4>Integrity</h4>
                </div>
                <div>
                  <p>
                    We believe that integrity promotes strong inter-relationship and trust among ourselves and with  collaborating partners 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='registration'>
          <div className='reg_par'>
            <p >
              Let’s make an impact to the Youth Together
            </p>
          </div>
          <div className='reg_btn'>
            <button onClick={()=> {navigate("/register")}}>Join Us</button>
          </div>
        </div>
        <div className='testimonies'>
          <h2 style={{textAlign: "center"}}>Testimonies</h2>
          <p style={{color: "#fff", textAlign: "center"}}>We aspire Creativity and innovative spirits among the university students</p>
          <Row>
            <Col md={4}><p style={{color: "#fff"}}>UISS is a home for creativity and innovation. Being a homie, 
                I was able to fully utilize my potentials by leading other passionate colleagues, 
                collaborating impacting the society, and even creating a much more favourable environment 
                for others to learn, creatr and innovate. In fact, UISS connects people, Students, stakeholders,
                 and technology practitioners together.</p>
                 <dvi><p style={{color: "#fff"}}>~Kedyson Zacharia DELOITTE</p></dvi>
            </Col>
            <Col md={4}></Col>
            <Col md={4}></Col>

          </Row>
        </div>
    </div>
  )
}

export default HomeContent