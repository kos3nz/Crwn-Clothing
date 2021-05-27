import {
  PurchaseCard,
  H1Message,
  Message,
  EmailLink,
} from './purchase-success.styles';

const PurchaseSuccessPage = () => (
  <div
    style={{
      height: '60vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <PurchaseCard>
      <H1Message>Thank you for shopping with us!! </H1Message>
      <Message>
        If you have any questions, please email us at
        <EmailLink>orders@example.com</EmailLink>.
      </Message>
    </PurchaseCard>
  </div>
);

export default PurchaseSuccessPage;
// export default connect(mapStateToProps)(PurchaseSuccessPage);
