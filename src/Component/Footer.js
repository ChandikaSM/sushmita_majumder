import { Container, Col, Row } from "react-bootstrap";
import { Mailchimpform } from "./Mailchimpform";
import logo from "../assets/img/logo.jpg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return(
      <footer className="footer">
        <Container>
            <Row className="align-item-center">
                {/* <Mailchimpform /> */}
                <Col sm={6}>
                    <span>NAME: <b>SUSHMITA MAJUMDER</b></span>
                    <br />
                    <span>EMAIL: <a type="email" href="sushmaj2347@gmail.com">sushmaj2347@gmail.com</a></span>
                    <br/>
                    <span>PHONE NUMBER: <b>6009031334</b></span>
                    <br/>
                    <span>CURRENT WORKING COMPANY: <b>XLAYER</b></span>
                    <br/>
                    <span>CURRENT WORKING PROJECT: <b>SOON TO BE MENTIONED</b></span>

                </Col>
                <Col sm={6} className="text-center text-sm-end">
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
                    <p>CopyRight 2023. All Right Reserved </p>
                </Col>
            </Row>
        </Container>
      </footer>
    )
}