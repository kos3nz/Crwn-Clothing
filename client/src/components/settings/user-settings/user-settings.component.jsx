import { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FormInput, { handleChange } from '../../form-input/form-input.component';
import CustomButton from '../../custom-button/custom-button.component';

import { selectCurrentUser } from '../../../redux/user/user.selectors';

import { UserSettingsContainer } from './user-settings.styles';
import { DisplayButtonCenter } from '../../custom-button/custom-button.styles';

//## =============== Component =============== ##//

const UserSettings = ({ currentUser }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });
  const { name, email } = user;

  const handleSubmit = () => {};

  return (
    <UserSettingsContainer>
      <h2>Your Account Settings</h2>
      <form>
        <FormInput
          handleChange={(event) => handleChange(event, user, setUser)}
          label={`Your Name: ${currentUser && currentUser.displayName}`}
          type="text"
          name="name"
          value={name}
        />
        <FormInput
          handleChange={(event) => handleChange(event, user, setUser)}
          label={`Your Email: ${currentUser && currentUser.email}`}
          type="text"
          name="email"
          value={email}
        />

        <DisplayButtonCenter>
          <CustomButton type="button" onClick={handleSubmit} settings>
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

//## =============== Export =============== ##//

export default connect(mapStateToProps)(UserSettings);
