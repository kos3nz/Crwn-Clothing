// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdownContainer from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  // OptionDiv,
} from './header.styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';
// ReactComponent is a special syntax in React for importing SVG.

//## =============== Component =============== ##//

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        // <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {/* if hidden is true, show nothing, if it's false, CartDropdown will be visible */}
    {hidden || <CartDropdownContainer />}
  </HeaderContainer>
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
