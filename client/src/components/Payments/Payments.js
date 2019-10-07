import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Button from '@material-ui/core/Button';

export default class Payments extends Component {
  render() {
    return (
      <div>
        <StripeCheckout
          name="Usurvey"
          description="Achat de crédits"
          amount={500}
          token={token => console.log(token)}
          stripeKey={process.env.REACT_STRIPE_KEY}>
          <Button color="inherit">Ajouter des crédits</Button>
        </StripeCheckout>
      </div>
    );
  }
}
