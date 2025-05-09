import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import '../styles/About.css'; // Wir erstellen diese CSS-Datei später

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        {/* Kopfbereich mit Titel */}
        <Row className="mb-5">
          <Col>
            <h1 className="section-title">Über mich</h1>
            <div className="title-underline"></div>
          </Col>
        </Row>

        {/* Hauptinhalt */}
        <Row className="align-items-center">
          {/* Profilbild */}
          <Col md={5} className="mb-4 mb-md-0">
            <div className="profile-image-wrapper">
              <Image
                src="/path-to-your-image.jpg" // Ersetze mit deinem Bild
                alt="Profilbild"
                fluid
                roundedCircle
                className="profile-image"
              />
            </div>
          </Col>

          {/* Textinhalt */}
          <Col md={7}>
            <Card className="about-card">
              <Card.Body>
                <h2 className="about-heading">Hallo, ich bin [Dein Name]</h2>
                <p className="about-text">
                  Ich bin ein leidenschaftlicher Webentwickler mit Fokus auf moderne 
                  JavaScript-Technologien. Mit [X] Jahren Erfahrung habe ich bereits 
                  zahlreiche Projekte realisiert, die sowohl funktional als auch 
                  ästhetisch überzeugen.
                </p>
                
                <div className="skills-tags mt-4">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">CSS3</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Zusätzliche Info-Sektion */}
        <Row className="mt-5">
          <Col>
            <h3 className="subsection-title">Mein Weg</h3>
            <p>
              Nach meinem Abschluss in [Dein Studium/Ausbildung] habe ich mich auf 
              die Webentwicklung spezialisiert. Besonders faszinieren mich [spezielles 
              Interesse, z.B. "nutzerzentrierte Designansätze"].
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;