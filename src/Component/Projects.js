import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp from "../assets/img/color-sharp2.png";
import image_one from "../assets/img/project-img4.jpg";
import image_two from "../assets/img/project-img3.jpg";
import image_three from "../assets/img/project-img1.png";
import image_four from "../assets/img/project-img6.jpg";
import image_five from "../assets/img/project-img2.jpg";
import image_six from "../assets/img/project-img5.jpg";

import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
        {
            title: "Web Development",
            description: "done",
            imgUrl: image_one,
        },
        {
            title: "Web Development",
            description: "done",
            imgUrl: image_two,
        },
        {
            title: "Web Development",
            description: "done",
            imgUrl: image_three,
        },
        {
            title: "Web Development",
            description: "done",
            imgUrl: image_four,
        },
        {
            title: "Web Development",
            description: "done",
            imgUrl: image_five,
        },
        {
            title: "Web Development",
            description: "done",
            imgUrl: image_six,
        },
        

    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animated__animated animate__slideInUp" : ""}>
                        <h2>Projects</h2>
                        <p>CERTIFICATES</p>
                        </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab one</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" >
                                    Tab Three
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                  key={index}
                                                  {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                           <Tab.Pane eventKey="second">
                            
                           </Tab.Pane>

                        <Tab.Pane eventKey="third"></Tab.Pane>
                                                </Tab.Content>
                                                </Tab.Container> 

                    </Col>
                </Row>
            </Container>

            <img className="background-image-right" src={colorSharp}></img>
        </section>

    )
}