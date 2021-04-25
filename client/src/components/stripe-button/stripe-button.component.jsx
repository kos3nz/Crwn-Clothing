import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

//## =============== Component =============== ##//

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IhD9pJTr5huhfR1QrLeECjiXeRz2MaMkzivNP7II8o7GVUh2Ze8Pd3xIKl35Nob2cGGRUHrbxN3ttgIMBdIAHpY00hMQd7yCh';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'POST',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert('Payment successful!');
      })
      .catch((err) => {
        console.log('Payment error: ', err.response);
        alert(
          'There was an issue with your payment. Please make sure you use the provided credit card'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

//## =============== Export =============== ##//

export default StripeCheckoutButton;
