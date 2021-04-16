import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
// ReactComponent is a special syntax in React for importing SVG.

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/shop" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/signin" className="option">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {/* if hidden is true, show nothing, if it's false, CartDropdown will be visible */}
    {hidden || <CartDropdown />}
  </div>
);

//## =============== Redux =============== ##//

// createStructuredSelector() で selectors にまとめて state を渡す
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

// the state object passed as an argument is the root reducer
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden,
// });
// ↑ equivalent to the code below
/*
const mapStateToProps = (state) => {
  // console.log(state.user.currentUser);
  return {
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden,
  };
};
*/

//## =============== Export =============== ##//

export default connect(mapStateToProps)(Header);
