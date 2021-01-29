import React, { Component } from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import $ from 'jquery';
import './fancytext.css';


class TextRotation extends Component {




    componentDidMount(){
        var divs = $('div[id^="content-"]').hide(),
        i = 0;
    
    (function cycle() { 
    
        divs.eq(i).fadeIn(400)
                  .delay(1000)
                  .fadeOut(400, cycle);
    
        i = ++i % divs.length;
    
    })();
    }

    



    render() {
        return (
            <Container fluid>

                <Row>
                    <Col>
                        <div className = "navigation-child navigation-text font-georgia font-subhead">
                            <p className = "text-center"> ...take a look at </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className = "text-center">

                            <div id = "menu-btn" className = "nav-btn nav-text">
                            <div class="dropdown-content">
                                <a href="#skills-container" className = "skill-text">my skills</a>
                                <a href="#skills-container" className = "skill-text">my experience</a>
                                <a href="#skills-container" className = "skill-text">my contact info</a>
                                <a href="#skills-conatiner" className = "skill-text">my dog</a>
                            </div>

                                <div className ="skill-text" id="content-1">my skills</div>
                                <div className ="skill-text" id="content-2">my experience</div>
                                <div className ="skill-text" id="content-3">my contact info</div>
                                <div className ="skill-text" id="content-4">my dog</div>
                            </div>
                        </div>
                        

                    </Col>
                </Row>

            </Container>
        );
    }
}

export default TextRotation ;