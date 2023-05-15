import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UISS from "../../assets/icon/UISS LOGO_VR 1.png"
import USDMLOGO from "../../assets/icon/lo 1.png"


const Header = ({activeLink, setActiveLink}) => {

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  
  return (
    <div>
        <div>
            <Navbar  expand="lg" bg='' collapseOnSelect className="custom-navbar">
                <Container>
                    <Navbar.Brand href="#home" style={{color: "#FABD18"}}>
                        <img src={USDMLOGO} alt='' height={40} className='d-none d-lg-block'/>
                        <span className='d-lg-none'>UISS</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto justify-content-center">
                        <Nav.Link href="/"active={activeLink === 'home'} onClick={() => handleLinkClick('home')}>HOME</Nav.Link>
                        <Nav.Link href="/about" active={activeLink === 'about'} onClick={() => handleLinkClick('about')}>ABOUT</Nav.Link>
                        <Nav.Link className='d-none d-lg-block'>
                            <img src={UISS} alt=""height={40}/>
                        </Nav.Link>
                        <Nav.Link href="/event" active={activeLink === 'event'} onClick={() => handleLinkClick('event')}>EVENT</Nav.Link>
                        <Nav.Link href="/project" active={activeLink === 'project'} onClick={() => handleLinkClick('project')}>PROJECT</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    </div>
  )
}

export default Header