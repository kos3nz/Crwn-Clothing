import { useContext, useEffect, useRef } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCurrentUser } from '../../../redux/user/user.selectors';
import {
  toggleUserHidden,
  signOutStart,
} from '../../../redux/user/user.actions';

import { HeaderContext } from '../../header/header.component';

import { UserAccountWrapper } from './user-dropdown.styles';

import UserDropdownItem from './user-dropdown-item/user-dropdown-item.component';

//## =============== Component =============== ##//

const UserDropdown = ({ currentUser, toggleUserHidden, signOutStart }) => {
  const { isTop } = useContext(HeaderContext);
  const userDropdownRef = useRef();

  const dropdownItems = [
    `Signed in as ${currentUser.displayName}`,
    'Settings',
    'My Favorite',
    'My Order',
    'Sign Out',
  ];

  const handleClick = (e) => {
    // console.log(userDropdownRef);
    // if click inside dropdown element, do nothing
    if (userDropdownRef.current.contains(e.target)) return;
    // if click outside, hide cart dropdown
    toggleUserHidden();
  };

  useEffect(() => {
    // add mousedown event when mounted
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserAccountWrapper
      ref={userDropdownRef}
      style={isTop ? null : { top: '60px' }}
    >
      {dropdownItems.map((item, index) => {
        if (item === `Signed in as ${currentUser.displayName}`)
          return (
            <UserDropdownItem
              key={index}
              as="div"
              style={{ padding: '10px 10px 15px' }}
            >
              {item}
            </UserDropdownItem>
          );
        if (item === 'Sign Out')
          return (
            <UserDropdownItem
              key={index}
              as="div"
              onClick={() => {
                toggleUserHidden();
                signOutStart();
              }}
            >
              {item}
            </UserDropdownItem>
          );

        const endpoint = item.toLowerCase().split(' ').join('-');
        return (
          <UserDropdownItem
            key={index}
            to={`/account/${endpoint}`}
            onClick={toggleUserHidden}
          >
            {item}
          </UserDropdownItem>
        );
      })}
    </UserAccountWrapper>
  );
};

//## =============== Redux =============== ##//

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  toggleUserHidden: () => dispatch(toggleUserHidden()),
  signOutStart: () => dispatch(signOutStart()),
});

//## =============== Container =============== ##//

const UserDropdownContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(UserDropdown);

//## =============== Export =============== ##//

// export default withRouter(connect(mapStateToProps)(UserDropdown));
export default UserDropdownContainer;
