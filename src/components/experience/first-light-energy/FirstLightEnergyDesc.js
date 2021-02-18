
import React from 'react';
import NavigationBar from '../../navbar/navbar';
import {Container, Row, Col} from 'react-bootstrap';
import './FirstLightEnergyDesc.css';

function FirstLightEnergyDesc(props) {
    return (
        <Container fluid>
            <Row>
                <NavigationBar/>
            </Row>
            <Row>
                <p className = "section-header pl-5">
                    What I learned at <span className = "green-highlight">1st Light Energy</span>:
                </p>
            </Row>
            <Row>
                <Col className = "pl-5 pr-5">
                    <p className = "body-text">
                    In my time at 1st Light Energy, I had the opportunity to contribute in many projects and got to put on many different roles. 

                    <br/>
                    <br/>
                    My general responsibilities involved:
                    <br/>
                    <span className ="font-italic font-gray">
                    maintaining internal web applications, 
                    <br/>
                    designing and implementing new programs, 
                    <br/>
                    and helping resolve user issues. 
                    </span>
                    <br/>
                    <br/>
                    <span className = "font-weight-bold red-highlight">Maintaining internal web applications</span> meant I had to be involved in interpreting and determining the plan to implement the feature. In some cases I had creative interpretation of the user's requirements. Other times I was able to exercise understanding and focusing on the precision of what the user wanted, to the exact detail. 
                    <br/>
                    <span className = "green-highlight font-italic">This helped me learn to transform a user’s desires into technical design </span> that satisfied business and technical needs. 
                    <br/>
                    <br/>
                    Another facet of working with 1st Light Energy’s internal web applications is that I had to continually handle bugs, whether from oversight in design or implementation.
                    <span className = "green-highlight font-italic">This gave me the ability to focus under pressure to determine solutions and get the job done.</span>

                    <br/>
                    <br/>
                    Technical skills gained:
                    <br/>

                    <span className = "font-italic font-gray">
                        Java, 
                    <br/>
                        Spring Boot, 
                    <br/>
                        AWS Lambda, 
                    <br/>
                        Salesforce
                    </span> 






                    </p>
                </Col>

            </Row>

        </Container>
    );
}

export default FirstLightEnergyDesc;