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

                        </Row>
                        <Row>
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

                        </Row>
                    </Col>
                    <Col id ="skill-desc">
                        <p>
                            <span className ="skill-desc-header">
                                Multi-Faceted,
                                <br/>
                                Technical,
                                <br/>
                                Creative.
                            </span>

                            <br/>
                            <br/>
                            <span className = "skill-desc-body">

                                My creations  are an extension of me.

                                <br/>
                                <br/>
                                I strive to deliver strong products that are 
                                <span className = "red-highlight"> useful </span>and 
                                <span className ="green-highlight"> unique</span>.
                            </span>
                        </p>

                    </Col>

                </Row>


            </Container>
        );
    }
}

export default Skills;