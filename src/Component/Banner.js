import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import Sushmita from "../assets/img/Sushmita.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import TrackVisibility from 'react-on-screen';
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDelecting, setDelecting] = useState(false);
    const toRotate = ["Web devoper", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect (() => {
        let ticker = setInterval(() => {
           tick();
        }, delta)

        return () => {
            clearInterval(ticker)
        };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDelecting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length+1);

        setText(updatedText);

        if ( isDelecting ) {
            setDelta(prevDelta => prevDelta/2)
        }

        if ( !isDelecting && updatedText === fullText) {
            setDelecting(true);
            setDelta(period);
        } else if (isDelecting && updatedText === '') {
            setDelecting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    } 
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animated__animated animate_fadeIn" : ""}>
                        <span className="tagline">
                            Welcome to my portfolio SUSHMITA MAJUMDER
                        </span>
                        <h1>
                            {`Hi I am webcoded `}
                            <span className="wrap">
                                {text}
                            </span>
                            <p>I am recently working as a web developer in XLayer Private Limited.
                                Learning new things day by day with consistency is my hobby. I have done winter Internship from ONGC TRIPURA ASSET. The time period of this project was JANUARY 2 TO FEBRUARY 2.
                                I have also worked in ZIVMART fixing debugging issues due to plugins and designing the website according to client demands.
                                Do visit and shop your special gifts for special person here.
                                <a href="https://zivmart.com/">ZIVMART</a>
                                Further more I have done internship at ARDENT COMPUTECH PRIVATE LTD. in west Bengal.
                                I love to draw, dance, travelling. I can give hand mehendi as well. I love to teach younger students. As Bacche man k sache they are my strong point.
                                I utilize each and every seconds in my life in a proper way. I maintained Honesty, Respect, Sincerity, kindness, Dedication and Determination in my work.
                                Respect is a precious and bulky word for me.
                                GIVE RESPECT GET RESPECT.

                            </p>
                        </h1>

                        <button onClick={() => console.log('connect')} >
                            Let's Connect <ArrowRightCircle size={25} />
                        </button>
                        </div>}
                        </TrackVisibility>
                    </Col>

                    <Col>
                       <img src={Sushmita} className="sm_pic_design" alt="sushmita"/>
                       <h2 className="text_over_image">{`HELLO AM SUSHMITA`}</h2>
                       <h3 className="small_text">{` NICE TO MEET YOU`}</h3>
                    </Col>
                </Row>
                <Row>
                <div className="shlok_part">
                            <div className="shlok_1">
                                <h3>
                                    {`Chanakya Neeti 5`}
                                     <br/>
                                     {`
                                        यथा चतुर्भिः कनकं परीक्ष्यते निघर्षणच्छेदनतापताडनैः ।
                                        तथा चतुर्भिः पुरुषः परीक्ष्यते त्यागेन शीलेन गुणेन कर्मणा ॥`}
                                    </h3>

                                
                                <h3>
                                     {`As gold is tested in four ways
                                     by rubbing, cutting, heating and beating –so
                                      a man should be tested by these four things: his renunciation, his conduct, 
                                      his qualities, and his actions.`}
                                     
                                </h3>

                                <h3>
                                    {`सोने की परख उसे घिस कर, काट कर, गरम कर के और पीट कर की जाती है. उसी
                                     तरह व्यक्ति का परीक्षण वह कितना त्याग करता है, 
                                     उसका आचरण कैसा है, उसमे गुण कौनसे है और उसका व्यवहार कैसा है इससे होता है|`}
                                </h3>
                                </div>
                            </div>
                       
                </Row>
            </Container>
        </section>
    )
}