import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class EstimatedTotal extends Component {
  state = {};
  render() {
    return (
      <Row>
        <Col md={6}>
          <h2>Est. Total</h2>
        </Col>
        <Col md={6}>
          <h2>{`$${this.props.price}`}</h2>
        </Col>
      </Row>
    );
  }
}

export default EstimatedTotal;
