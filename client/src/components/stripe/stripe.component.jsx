import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

import CustomButton from '../custom-button/custom-button.component';

import { showErrorAlert } from '../../redux/alert/alert.actions';

import { selectCartItems } from '../../redux/cart/cart.selectors';

const stripePromise = loadStripe(
  'pk_test_51IhD9pJTr5huhfR1QrLeECjiXeRz2MaMkzivNP7II8o7GVUh2Ze8Pd3xIKl35Nob2cGGRUHrbxN3ttgIMBdIAHpY00hMQd7yCh'
);

//## =============== Component =============== ##//

const StripeCheckoutButton = ({ cartItems, showErrorAlert }) => {
  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    try {
      // Call your backend to create the Checkout Session
      const session = await axios({
        url: 'payment',
        method: 'POST',
        data: { cartItems },
      });

      // When the customer clicks on the button, redirect then to Checkout.
      await stripe.redirectToCheckout({
        sessionId: session.data.id,
      });
    } catch (error) {
      // If 'redirectToCheckout' fails due to a browser or network error,
      // display the localized error message to your customer using 'result.error.message'
      console.log(error);

      showErrorAlert('Oops, something went wrong. Please try again');
    }
  };

  return (
    <CustomButton role="link" onClick={handleClick}>
      Checkout Now
    </CustomButton>
  );
};

//## =============== Redux =============== ##//

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  showErrorAlert: (message) => dispatch(showErrorAlert(message)),
});

//## =============== Export =============== ##//
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StripeCheckoutButton);
