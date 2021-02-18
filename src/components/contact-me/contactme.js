import React, { Component } from 'react';
import {Container, Col, Row, Form, Alert, Card} from 'react-bootstrap';
import './contactme.css';

class ContactMe extends Component {
    constructor(props){
        super(props);

        this.state = {
            contactForm:{
                contactName: "",
                contactEmail: "",
                contactMessage: ""
            },
            showAlert: false,
            contactSuccess:false,
            alertHeader:'',
            alertMessage:''

        };
        this.handleContactFormSubmission = this.handleContactFormSubmission.bind(this);
        this.closeAlert = this.closeAlert.bind(this);

    }


    handleInputChange = (evt) =>{
        const value = evt.target.value;
        const formInfo= {
            ...this.contactForm,
            [evt.target.name]: value
        };

        this.setState({
            contactForm: formInfo
        });
    }

    buildAlert(response){
        let alertHeader;
        let alertMessage = <p>Contact me at 510 579 1918 if you can't wait!</p>

        if(response){
            alertHeader = <Alert.Heading>Nice! I got your message, I'll be in touch.</Alert.Heading> ;
        }else{
            alertHeader = <Alert.Heading>Huh... looks like something went wrong?</Alert.Heading>;
        }
        this.setState({
            contactSuccess : response,
            showAlert: true,
            alertHeader: alertHeader,
            alertMessage: alertMessage
        });
    }

    handleContactFormSubmission(evt){
        evt.preventDefault();
        const serviceId = 'service_sv0g9ty';
        const userId = 'user_WtwbVpwn02mOTTUqiaRSp';
        const templateId = 'template_hi4prka';
        const templateParams = {
            ...this.state.contactForm
        }
        let response = true;
/*
        email_js.send(
            serviceId,
            templateId,
            templateParams,
            userId
        ).then(function(success){
            console.log("yes!", success);
            response = true;
        }, function(error){
            console.log("NOOO!", error);
            response = false;
        });
        */


        this.buildAlert(response);
    }
    closeAlert(){
        this.setState({
            showAlert:false
        });
    }




    render() {
        return (
            <Container fluid id = "contact-me-container">
                <Row>
                    <Col className = "text-center">
                        <p className ="section-header">
                            Want to talk?
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className = "custom-card contact-form">
                            <Alert show ={this.state.showAlert} variant = {this.state.contactSuccess ? 'success' : 'danger'} onClose={this.closeAlert} dismissible>
                                {this.state.alertHeader}
                                {this.state.alertMessage}
                            </Alert>
                            <Form id ="contact" >
                                <Row>
                                    <Col lg ={6}>
                                        <Form.Group>
                                            <Form.Label className = "form-text">
                                                What's your name?
                                            </Form.Label>
                                            <Form.Control className = "form-input" name = "contactName" type = "text" onChange ={this.handleInputChange} value = {this.state.contactForm.contactName} placeholder ="Mark Nguyen" required/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg ={6}>
                                        <Form.Group>
                                            <Form.Label className = "form-text">
                                                What's your email?
                                            </Form.Label>
                                            <Form.Control  className = "form-input" name = "contactEmail" type = "email" onChange ={this.handleInputChange} value = {this.state.contactForm.contactEmail} placeholder ="mkqnn97@gmail.com" required/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group>
                                    <Form.Label className = "form-text">
                                        What would you like to say?
                                    </Form.Label>
                                    <Form.Control className = "form-input" name = "contactMessage" as= "textarea" onChange ={this.handleInputChange} value ={this.state.contactForm.contactMessage} placeholder ="Hi, I hope you're doing well today!" rows ={3} required/>
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>

                </Row>
                <Row>
                    <Col className = "text-center">
                        <button className = "submit-btn" form="contact" onClick ={this.handleContactFormSubmission}>
                            <p className = "submit-btn-text section-header">
                                Let's do it
                            </p>
                        </button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ContactMe ;