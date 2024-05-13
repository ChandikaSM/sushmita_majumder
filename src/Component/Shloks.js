import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Shloks = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
      return (
        <section className="shlok" id="shloks">
            <Container>
                <Row>
                    <Col>
                       <div className="shlok-bx">
                        <h2>
                            Shloks
                        </h2>

                        <p></p>

                        <Carousel responsive={responsive} infinite={true} className="shlok-slider">
                          <div className="item">
                            <img src={'https://www.hindisoch.com/wp-content/uploads/2017/07/Geeta-Ke-Shlok-with-Real-Meaning-in-Hindi.jpg'} alt="karma"/>
                            <h5>श्री कृष्ण कहते हैं कि हे अर्जुन, कर्म करना तुम्हारा अधिकार है परन्तु फल की इच्छा करना तुम्हारा अधिकार नहीं है| कर्म करो और फल की इच्छा मत करो अर्थात फल की इच्छा किये बिना कर्म करो क्यूंकि फल देना मेरा काम है|</h5>
                          </div>

                          <div className="item">
                            <img src={'https://i0.wp.com/allovershayari.com/wp-content/uploads/2022/12/Happy-Gita-Jayanti-Wishes-Messages.jpg?w=600&ssl=1'} alt="Image"/>
                            <h5>श्री कृष्ण कहते हैं कि हे अर्जुन सफलता और असफलता की आसक्ति को त्यागकर सम्पूर्ण भाव से समभाव होकर अपने कर्म को करो| यही समता की भावना योग कहलाती है|</h5>
                          </div>

                          <div className="item">
                            <img src={'https://i.pinimg.com/originals/bd/12/c6/bd12c6ecbca069497f50e8a606c00fc3.jpg'} alt="Image"/>
                            <h5>ॐ भूर्भुवः स्वः
                                तत्सवितुर्वरेण्यं
                                भर्गो देवस्य धीमहि
                                धियो यो नः प्रचोदयात् ॥
                            </h5>
                          </div>
                        </Carousel>
                       </div>
                    </Col>
                </Row>
            </Container>

            <img className="background-image-left" src={colorSharp} />
        </section>
      )
}