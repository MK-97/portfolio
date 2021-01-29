import React, { Component } from 'react';
import logo from './rss/logo-small.svg';
import {ReactSvgInjector} from 'react-svg-injector';
import {Navbar, Nav} from 'react-bootstrap';
import './navbar.css';

class NavigationBar extends Component {
    render() {
        return (
                <Navbar id ="navigation-bar" bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="/">
                    <ReactSvgInjector src = {logo}>
                    </ReactSvgInjector>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/#skills-container">Skills</Nav.Link>
                    <Nav.Link href="/experience">Experience</Nav.Link>
                    <Nav.Link href="/#resume-container">Resume</Nav.Link>
                    <Nav.Link href="/#contact-me-container">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        );
    }
}

export default NavigationBar;