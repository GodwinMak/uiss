import { Form, Input } from 'antd'
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Call from "../../assets/icon/call 2.png";
import Mail from "../../assets/icon/mail  2.png";
import Pin from "../../assets/icon/pin 5.png"
import Fb from "../../assets/icon/facebook.png"
import Ig from "../../assets/icon/Frame.png"
import Ld from "../../assets/icon/instagram.png"
import Tw from "../../assets/icon/linkedin.png"

const Footer = () => {
  return (
    <div className='footer'>
      <Row>
        <Col md={4}>
          <div className='footer_card email_input'>
            <h6 style={{color: "#FABD18"}}>STAY CONNECTED WITH US</h6>
            <div>
              <Form >
                <Form.Item
                    name="email"
                >
                    <label style={{color: "#fff"}}>Email</label>
                    <Input type='email' placeholder="Your email" required style={{ border: "none", borderBottom: "1px solid #fff"}} />
                </Form.Item>
                <Button>Contact Us</Button>
              </Form>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className='footer_card contacts'>
          <div className='info'>
            <img src={Pin} alt=''/>
            <span style={{color: "#fff", marginLeft: "5px"}}>COICT,Kijitonyama</span>
          </div>
          <div  className='info'>
            <img src={Mail} alt=''/>
            <span style={{color: "#fff", marginLeft: "5px"}}>udsmict@gmail.com</span>
          </div >
          <div className='info'>
            <img src={Call} alt=''/>
            <span style={{color: "#fff", marginLeft: "5px"}}>+255765345345</span>
          </div>
        </div>
        </Col>
        <Col md={4}>
          <div className='footer_card social'>
            <h6 style={{color: "#fff"}}>Follow us on social media</h6>
            <div className='social_icon'>
              <img src={Ld} alt=''/>
              <img  src={Ig} alt=''/>
              <img  src={Tw} alt=''/>
              <img  src={Fb} alt=''/>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
