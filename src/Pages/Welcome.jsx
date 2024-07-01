// Welcome.jsx

import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap'; // Assuming you're using React Bootstrap for styling
import './Welcome.css'; // Assuming you're using an external CSS file for custom styles

const Welcome = () => {
    return (
        <div className="welcome-background">
            <Container>
                <Row className="mt-5">
                    <Col md={{ span: 8, offset: 2 }} className="text-center text-light">
                        <h1>Welcome to Learn buds Matrimony</h1>
                        <p className="lead mt-3">
                            Find your perfect match with us. Start your journey towards a lifelong partnership today.
                        </p>
                        
                            <Button variant="primary" type="submit" className="mt-3">
                                Create Profile
                            </Button>
                       
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Welcome;
