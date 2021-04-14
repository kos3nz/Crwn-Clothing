import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
// ReactComponent is a special syntax in React for importing SVG.

const Header = ({ currentUser }) => (
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
    </div>
  </div>
);

// the state object passed as an argument is the root reducer
const mapStateToProps = (state) => {
  // console.log(state.user.currentUser);
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(Header);
