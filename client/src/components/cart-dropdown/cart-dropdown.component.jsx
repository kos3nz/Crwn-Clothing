import { useContext } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { HeaderContext } from '../header/header.component';

const CartDropdown = ({ cartItems, total, history, dispatch }) => {
  const { isTop } = useContext(HeaderContext);
  // console.log(isTop);

  // console.log('CartDropdown rendered');
  return (
    <div className="cart-dropdown" style={isTop ? null : { top: '60px' }}>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="no-item">No Items In Your Cart Yet!</span>
        )}
      </div>
      <div className="total">Total: ${total}</div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

//## =============== Redux =============== ##//

// NOTE: How createStructuredSelector works
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// });
// ↓
// const mapStateToProps = (state) => ({
//   cartItems: selectCartItems(state),
// });
// ↓
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });
// mapDispatchToProps を渡していない場合は connect() が property に dispatch を含んでいるため、必ずしも mapDispatchToProps を渡さないといけないわけではない

//## =============== Container =============== ##//

const CartDropdownContainer = compose(
  withRouter,
  connect(mapStateToProps)
)(CartDropdown);

//## =============== Export =============== ##//

// export default withRouter(connect(mapStateToProps)(CartDropdown));
export default CartDropdownContainer;
