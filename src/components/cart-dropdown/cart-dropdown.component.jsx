import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <div className="no-item">No Items In Your Cart Yet!</div>
      )}
    </div>
    <div className="total">
      Total: $
      {cartItems.reduce((acm, cur) => {
        return acm + cur.price * cur.quantity;
      }, 0)}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// });

export default connect(mapStateToProps)(CartDropdown);
