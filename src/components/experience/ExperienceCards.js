import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import logo from './rss/1le.png';
import './ExperienceCards.css';

function ExperienceCards(props) {


    return (
        <Container fluid id="experience-cards-container">
            <Row>
                <Col className = "text-center">
                    <p className = "section-header">See my Experience</p>
                </Col>
            </Row>
            <Row className = "" >
                <div className ="exp-card custom-card">
                    <div className = "exp-card-img">
                        <img className = "w-100 firstlight-logo" src = {logo}></img>
                    </div>
                    <div className ="exp-card-body">
                        <p className = "exp-card-header">
                        1st Light Energy - Software Developer 
                        </p>


                        <p className = "exp-card-desc">
                            I learned to take the lead in projects and be responsible for my design and
                            implementation. I'm grateful to have been part of a team that
                            emphasized playing to our strengths that also pushed where we were weak.
                        
                        </p>
                        <a href="/experience/firstLightEnergy">
                            Wanna read more?
                        </a>
                    </div>
                </div>
            </Row>
        </Container>
    );
}


export default ExperienceCards;