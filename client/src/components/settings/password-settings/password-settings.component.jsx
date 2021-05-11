import { useState } from 'react';

import FormInput, { handleChange } from '../../form-input/form-input.component';
import CustomButton from '../../custom-button/custom-button.component';

import { PasswordSettingsContainer } from './password-settings.styles';
import { DisplayButtonCenter } from '../../custom-button/custom-button.styles';

//## =============== Component =============== ##//

const PasswordSettings = () => {
  const [password, setPassword] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const { currentPassword, newPassword, confirmPassword } = password;

  const handleSubmit = () => {};

  return (
    <PasswordSettingsContainer>
      <h2>Password Change</h2>
      <form>
        <FormInput
          handleChange={(event) => handleChange(event, password, setPassword)}
          label="Current Password"
          type="password"
          name="currentPassword"
          value={currentPassword}
          required
        />
        <FormInput
          handleChange={(event) => handleChange(event, password, setPassword)}
          label="New Password"
          type="password"
          name="newPassword"
          value={newPassword}
          required
        />
        <FormInput
          handleChange={(event) => handleChange(event, password, setPassword)}
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <DisplayButtonCenter>
          <CustomButton type="button" onClick={handleSubmit} settings>
            Save Password
          </CustomButton>
        </DisplayButtonCenter>
      </form>
    </PasswordSettingsContainer>
  );
};

export default PasswordSettings;
