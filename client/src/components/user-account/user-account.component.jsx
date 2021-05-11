import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { UserAccountWrapper, UserImage, Triangle } from './user-account.styles';

import { toggleUserHidden } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

//## =============== Component =============== ##//

const UserAccount = ({ currentUser, toggleUserHidden, hasTriangle }) => {
  return (
    <UserAccountWrapper onClick={toggleUserHidden}>
      <UserImage
        src={
          require(`../../assets/user/${currentUser.imageUrl || 'default'}.png`)
            .default
        }
        alt="User"
      />
      {hasTriangle ? <Triangle /> : <span>{currentUser.displayName}</span>}
    </UserAccountWrapper>
  );
};

//## =============== Redux =============== ##//

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  toggleUserHidden: () => dispatch(toggleUserHidden()),
});

//## =============== Export =============== ##//
export default connect(mapStateToProps, mapDispatchToProps)(UserAccount);
