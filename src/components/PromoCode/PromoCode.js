import React, { Component } from "react";
import {
  Button,
  Collapse,
  Form,
  FormGroup,
  FormControl
} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { handleChange } from "../../actions/promoCodeActions";

class PromoCodeDiscount extends Component {
  // we no longer need a constructor as the state will be managed in redux

  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  handleChange = e => {
    // the setState below will be sent to redux
    // this.setState({ value: e.target.value });
    this.props.handleChange(e);
  };

  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          variant="success"
          size="sm"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply ` : `Hide `}
          promo code
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Row className="show-grid">
              <Col md={12}>
                <Form>
                  <FormGroup controlId="fromInlinName">
                    <FormControl
                      type="text"
                      placeholder="Enter promo code"
                      value={this.props.promoCode}
                      onChange={this.handleChange}
                    />
                    <Button
                      className="btn-round"
                      disabled={this.props.isDisabled}
                      onCLick={this.props.giveDiscount}
                    >
                      Apply
                    </Button>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </div>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps,
  { handleChange }
)(PromoCodeDiscount);
