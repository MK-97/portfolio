import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import resume from './rss/resume.jpg';
import resume_pdf from './rss/resume.pdf';
import {ReactSvgInjector} from 'react-svg-injector';
import squiggly from './rss/squiggly.svg';
import './resume.css';

class Resume extends Component {
    render() {
        return (
            <Container fluid id="resume-container">
                <Row>
                    <Col className = "text-center" lg ={6}>
                    <Row>
                        <Col>
                            <p className = "section-header">
                                Want my resume?
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className = "text-center">
                            <a href={resume_pdf} download ="Mark_Nguyen_Resume" className = "resume-btn-text section-header">Yes please!</a>
                        </Col>
                    </Row>
                    </Col>
                    <Col className = "text-center" lg ={6}>
                        <div className="resume-container text-center" >
                            <img src={resume} width="400px" className = "resume" alt="hello"/>
                            <div className = "download-resume-btn">
                                <a href = {resume_pdf} target ="_blank" className = "resume-btn-text section-header">
                                    Look closer!
                                </a>
                            </div>
                        </div>
                    </Col>

                </Row>

                <Row >
                    <Col className = "text-center squiggly-line">
                        <ReactSvgInjector id="squiggly_break" src = {squiggly}>

                        </ReactSvgInjector>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Resume ;