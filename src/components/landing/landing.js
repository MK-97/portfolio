import React, { Component } from 'react';
import './landing.css';
import {Container, Row, Col} from 'react-bootstrap';
import {ReactSvgInjector} from 'react-svg-injector';
import squiggly from './rss/squiggly.svg';
import MediaQuery from 'react-responsive'


class Landing extends Component {


    render() {
        return (
            <Container fluid>
                <Row id = "landing-text">
                    <Col>
                        <div className = "hello-text landing-text text-center">
                            <p>
                                <span id ="my-name">Mark Nguyen</span> is a <span className = "my-highlight">web developer</span> in California,
                                <br/>
                                and is currently working at 1st Light Energy.
                                <br/>
                                <br/>
                                <MediaQuery maxDeviceWidth={1220}>
                                    <br/>
                                </MediaQuery>

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