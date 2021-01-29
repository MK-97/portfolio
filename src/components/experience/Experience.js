import React, { Component } from 'react';
import {Container, Row} from 'react-bootstrap';
import NavigationBar from '../navbar/navbar';

class Experience extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <NavigationBar/>
                </Row>
            </Container>
        );
    }
}

export default Experience;