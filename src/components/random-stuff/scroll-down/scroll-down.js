import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import arrow from "./arrow.svg";
import {ReactSvgInjector} from 'react-svg-injector';
import 'react-bootstrap';

class ScrollDown extends Component {
    render() {
        return (
            <Container fluid>
                <Row className = "font-georgia font-subhead">
                    <Col className = "text-center">
                        <p>
                            <br/>
                            <br/>
                            or you can just scroll down
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className = "text-center">
                        <ReactSvgInjector src = {arrow}> </ReactSvgInjector>
                    </Col>
                </Row>

                
            </Container>
        );
    }
}

export default ScrollDown;