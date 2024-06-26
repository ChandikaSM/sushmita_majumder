import { useEffect } from "react";
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (window.scrollY > 50){
            setScrolled(true);
        } else {
            setScrolled(false);
        }

        window.addEventListener("scroll", onscroll);

        return () => window.removeEventListener("scroll", onscroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return(
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""} >
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} className="logo-design" alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Project</Nav.Link>
                    </Nav>
                    <span className="navabr-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/sushmitam23/" target="_blank">
                                <img src={navIcon1} alt="" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61558343581204" target="_blank">
                                <img src={navIcon2} alt="" />
                            </a>
                            <a href="https://www.instagram.com/chandikasm/" target="_blank">
                                <img src={navIcon3} alt="" />
                            </a>
                        </div>
                        {/* <button className="vvd" onClick={() => console.log('connect')}> */}
                            <span>
                                Let's connect
                            </span>
                        {/* </button> */}
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}