import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Horizontal = ({ text }) => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col>
          <hr className="my-1" />
        </Col>
        <Col xs="auto">
          <span className="mx-2">{text}</span>
        </Col>
        <Col>
          <hr className="my-1" />
        </Col>
      </Row>
    </Container>
  );
};

export default Horizontal;
