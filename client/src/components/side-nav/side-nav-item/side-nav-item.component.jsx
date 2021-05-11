import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { signOutStart } from '../../../redux/user/user.actions';

import { NavItemsList, NavItem, IconContainer } from './side-nav-item.styles';

//## =============== Component =============== ##//

const SideNavItem = ({ icon, text, endpoint, signOutStart }) => {
  const { sidenav } = useParams();

  return (
    <NavItemsList>
      {endpoint !== 'sign-out' ? (
        <NavItem active={sidenav === endpoint} to={`/account/${endpoint}`}>
          <IconContainer>{icon}</IconContainer>
          <span>{text.toUpperCase()}</span>
        </NavItem>
      ) : (
        <NavItem as="div" onClick={signOutStart}>
          <IconContainer>{icon}</IconContainer>
          <span>{text.toUpperCase()}</span>
        </NavItem>
      )}
    </NavItemsList>
  );
};

//## =============== Redux =============== ##//

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

//## =============== Export =============== ##//

export default connect(null, mapDispatchToProps)(SideNavItem);
