import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

//## =============== Redux =============== ##//

// const mapStateToProps = ({ cart: { cartItems } }) => {
//   console.log('I am being called');
//   return {
//     itemCount: cartItems.reduce((acc, cur) => {
//       return acc + cur.quantity;
//     }, 0),
//   };
// };
// NOTE: every time the root state is changed (like signing in, signing out, etc...), this mapStateToProps will be called even though this only count the number of the items, because the state will be passed as a NEW object and this reduce method is always returning a new value.
// ↓
// mapStateToProps is always being called
// const mapStateToProps = (state) => {
//   // console.log('mapStateToProps is being called');
//   return {
//     // pass the whole state into the selector
//     itemCount: selectCartItemsCount(state),
//   };
// };
// ↓
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

//## =============== Export =============== ##//

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
