import NoItems from '../no-items/no-items.component';

import { MyOrderWrapper } from './my-order.styles';

const MyOrder = () => (
  <MyOrderWrapper>
    <h2>My Order History</h2>
    <NoItems>You have no order history yet.</NoItems>
  </MyOrderWrapper>
);

export default MyOrder;
