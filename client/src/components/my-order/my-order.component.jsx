import NoItems from '../no-items/no-items.component';

import { MyOrderWrapper } from './my-order.styles';

const MyOrder = () => (
  <MyOrderWrapper>
    <h2>My Order History</h2>
    <NoItems>There is no order history.</NoItems>
  </MyOrderWrapper>
);

export default MyOrder;
