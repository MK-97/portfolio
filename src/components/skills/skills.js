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
                        <Row>
                            <Col className = "text-center">
                            <div>

                                <p className = "skill-header">
                                    Front-end Development
                                </p>
                                <p className = "skill-body">
                                    JavaScript
                                    <br/>
                                    React
                                    <br/>
                                    Adobe Xd
                                    <br/>
                                    UX / UI Design
                                </p>

                            </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className = "text-center">
                            <div>
                                <p className = "skill-header">
                                    Back-end Development
                                </p>

                                <p className = "skill-body">
                                    Java
                                    <br/>
                                    Spring Boot
                                    <br/>
                                    AWS Lambda
                                    <br/>
                                    Serverless
                                    <br/>
                                    API Design
                                </p>
                            </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>


            </Container>
        );
    }
}

export default Skills;