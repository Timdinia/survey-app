import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

const Payments = ({ handleToken }) => {
  return (
    <React.Fragment>
      <StripeCheckout
        name="Usurvey"
        description="Achat de crédits"
        amount={500}
        token={token => handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}>
        <Tooltip title="Ajouter des crédits">
          <Button color="inherit" style={{ marginLeft: '16px' }}>
            <AddIcon style={{ marginRight: '8px' }} /> Ajouter des crédits
          </Button>
        </Tooltip>
      </StripeCheckout>
    </React.Fragment>
  );
};

export default connect(
  null,
  actions
)(Payments);
