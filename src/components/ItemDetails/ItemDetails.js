import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";
import { Button, Collapse } from "react-bootstrap";

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          size="sm"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide `} item details
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Media>
              <img
                width={100}
                height={100}
                alt="thumbnail"
                src="https://cdn.shopify.com/s/files/1/0051/4802/products/Invertocat_2.0_Mock_GithubShop-M1_600x600.jpg?v=1563300713"
              />

              <Media.Body>
                <h5>Black GitHub Shirt</h5>
                <p>This shirt is needed when coding</p>
                <Row className="show-grid">
                  <Col md={6}>
                    <strong>{`$${this.props.price}`}</strong>
                    <br />
                    <strong className="price-strike">
                      {`$${this.props.price}`}{" "}
                    </strong>
                  </Col>
                  <Col md={6}>Quantity: 1</Col>
                </Row>
              </Media.Body>
            </Media>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default ItemDetails;
