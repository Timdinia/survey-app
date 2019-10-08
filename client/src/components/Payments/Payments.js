import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Payments extends Component {
  render() {
    return (
      <div>
        <StripeCheckout
          name="Usurvey"
          description="Achat de crédits"
          amount={500}
          token={token => this.props.handleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}>
          <Button color="inherit">Ajouter des crédits</Button>
        </StripeCheckout>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
