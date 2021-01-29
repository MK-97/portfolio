import React, { Component } from 'react';
import './landing.css';
import {Container, Row, Col} from 'react-bootstrap';
import {ReactSvgInjector} from 'react-svg-injector';
import squiggly from './rss/squiggly.svg';

class Landing extends Component {
    render() {
        return (
            <Container fluid>
                <Row id = "landing-text">
                    <Col>
                        <div className = "hello-text landing-text text-center">
                            <p id="my-name">
                                Mark Nguyen
                            </p>
                            <p>
                                I’m a <span className = "my-highlight">web developer </span>
                                <br/>
                                Graduated with a B.S in Computer Science from Biola University.
                                <br/>
                                I like to bring ideas to life through design and code.

                            </p>
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

export default Landing ;