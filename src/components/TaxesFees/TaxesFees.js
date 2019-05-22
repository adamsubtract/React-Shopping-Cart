import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class TaxesFees extends Component {
  state = {};
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}> Est. texes & fees (Based on 92113)</Col>
        <Col md={6}>{`$${this.props.taxes}`}</Col>
      </Row>
    );
  }
}

export default TaxesFees;
