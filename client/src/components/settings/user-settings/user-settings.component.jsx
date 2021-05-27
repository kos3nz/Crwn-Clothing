import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FormInput, { handleChange } from '../../form-input/form-input.component';
import CustomButton from '../../custom-button/custom-button.component';

import { selectCurrentUser } from '../../../redux/user/user.selectors';

import { UserSettingsContainer } from './user-settings.styles';
import { DisplayButtonCenter } from '../../custom-button/custom-button.styles';

import { updateUserProfileStart } from '../../../redux/user/user.actions';
import {
  showSuccessAlert,
  hideAlert,
} from '../../../redux/alert/alert.actions';

//## =============== Component =============== ##//

const UserSettings = ({
  currentUser,
  updateUserProfileStart,
  showSuccessAlert,
  hideAlert,
}) => {
  const [user, setUser] = useState({
    displayName: '',
    email: '',
  });
  const { displayName, email } = user;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (displayName.length === 0) return;
    updateUserProfileStart({ displayName, email });
  };

  useEffect(() => {
    if (displayName.length > 0 || email.length > 0) {
      showSuccessAlert('Successfully updated!');

      setTimeout(() => {
        hideAlert();
      }, 3000);
    }
    setUser({ displayName: '', email: '' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  return (
    <UserSettingsContainer>
      <h2>Your Account Settings</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={(event) => handleChange(event, user, setUser)}
          label={`Your Name: ${currentUser && currentUser.displayName}`}
          type="text"
          name="displayName"
          value={displayName}
        />
        <FormInput
          handleChange={(event) => handleChange(event, user, setUser)}
          label={`Your Email: ${currentUser && currentUser.email}`}
          type="text"
          name="email"
          value={email}
        />

        <DisplayButtonCenter>
          <CustomButton type="submit" settings>
            Save Settings
          </CustomButton>
        </DisplayButtonCenter>
      </form>
    </UserSettingsContainer>
  );
};

//## =============== Redux =============== ##//

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserProfileStart: (userCredentials) =>
    dispatch(updateUserProfileStart(userCredentials)),
  showSuccessAlert: (message) => dispatch(showSuccessAlert(message)),
  hideAlert: () => dispatch(hideAlert()),
});

//## =============== Export =============== ##//

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);
