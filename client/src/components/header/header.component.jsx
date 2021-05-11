import { useState, useEffect, createContext } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdownContainer from '../cart-dropdown/cart-dropdown.component';
import UserAccount from '../user-account/user-account.component';
import UserDropdown from '../dropdown/user-dropdown/user-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import {
  selectCurrentUser,
  selectUserHidden,
} from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

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

//## =============== Context Provider =============== ##//

export const HeaderContext = createContext({
  isTop: true,
});

//## =============== Helper Function =============== ##//

// scroll位置を取得
const scrollTop = () => {
  return Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
};

//## =============== Component =============== ##//

const Header = ({ currentUser, cartHidden, signOutStart, userHidden }) => {
  const [isTop, setIsTop] = useState(true);

  const onScroll = () => {
    const position = scrollTop();
    if (position <= 10) setIsTop(true);
    else setIsTop(false);
  };

  useEffect(() => {
    // console.log(isTop);
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [isTop]);

  return (
    <HeaderContext.Provider value={{ isTop }}>
      <HeaderContainer
        style={
          isTop
            ? { boxShadow: 'none' }
            : {
                boxShadow: '0 .5px 5px #444',
                paddingTop: '10px',
                paddingBottom: '5px',
              }
        }
      >
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to="/shop">SHOP</OptionLink>
          <OptionLink to="/contact">CONTACT</OptionLink>
          {currentUser ? (
            // <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
            // <OptionLink as="div" onClick={signOutStart}>
            <UserAccount hasTriangle />
          ) : (
            // </OptionLink>
            <OptionLink to="/signin">SIGN IN</OptionLink>
          )}
          <CartIcon />
        </OptionsContainer>
        {/* if cartHidden is true, show nothing, if it's false, CartDropdown will be visible */}
        {userHidden || <UserDropdown />}
        {cartHidden || <CartDropdownContainer />}
      </HeaderContainer>
    </HeaderContext.Provider>
  );
};

//## =============== Redux =============== ##//

// createStructuredSelector() で selectors にまとめて state を渡す
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
  userHidden: selectUserHidden,
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

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

//## =============== Export =============== ##//

export default connect(mapStateToProps, mapDispatchToProps)(Header);
