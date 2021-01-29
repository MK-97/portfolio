import Landing from '../components/landing/landing';
import Skills from '../components/skills/skills';
import './portfolio.css';
import { Col, Container, Row } from 'react-bootstrap';
import NavigationBar from '../components/navbar/navbar';
import Resume from '../components/resume/resume';
import ContactMe from '../components/contact-me/contactme';
import ExperienceCards from '../components/experience/ExperienceCards';

function Portfolio() {
  return (
    <Container fluid id= "background">
        <Row>
            <NavigationBar/>
        </Row>
        <Row id= "landing">
          <Col>
            <Landing/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Skills/>
          </Col>
        </Row>
        <Row>
          <Col>
            <ExperienceCards/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Resume/>
          </Col>
        </Row>
        <Row>
          <Col>
            <ContactMe/>
          </Col>
        </Row>
    </Container>
  );
}

export default Portfolio;
