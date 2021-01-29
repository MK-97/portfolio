import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './skills.css';

class Skills extends Component {
    render() {
        return (
            <Container fluid id = "skills-container">
                <Row>
                    <Col className="text-center">
                        <p className = "section-header"> My Services</p>
                    </Col>
                </Row>

                <Row id = "skill-cards-container">
                    <Col>
                        <Card className = "mt-3 ">
                            <Card.Body>
                                <Card.Title>
                                    <p className = "skill-card-title">
                                        Front-end Development
                                    </p>
                                </Card.Title>
                                <Card.Text >
                                    <div className = "skill-card-description">
                                        <p>
                                            My goal is to provide simple and easy to use products!
                                        </p>
                                    </div>
                                    <div>
                                        <p className = "skill-card-skill-header">
                                           Languages 
                                        </p>
                                        <p className = "skill-card-skill-text">
                                            HTML, CSS, JavaScript
                                        </p>
                                        <p className = "skill-card-skill-header">
                                            Tools and Frameworks
                                        </p>
                                        <p className = "skill-card-skill-text">
                                            ReactJS<br/>Adobe Xd<br/>Bootstrap<br/>VSCode

                                        </p>
                                    </div>
                                </Card.Text>


                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className = "mt-3">
                            <Card.Body>
                                <Card.Title>
                                    <p className = "skill-card-title">
                                        Back-end Development
                                    </p>
                                </Card.Title>

                                <Card.Text>
                                    <div className = "skill-card-description">
                                        <p>
                                            My goal is to deliver reliable and robust code!
                                        </p>
                                    </div>
                                    <div>
                                        <p className = "skill-card-skill-header">
                                           Languages 
                                        </p>
                                        <p className = "skill-card-skill-text">
                                            Java, MySQL 
                                        </p>

                                        <p className = "skill-card-skill-header">
                                            Tools and Frameworks
                                        </p>
                                        <p className = "skill-card-skill-text">
                                            Spring Boot<br/>IntelliJ<br/>AWS Lambda<br/>Serverless
                                        </p>
                                    </div>


                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Skills;