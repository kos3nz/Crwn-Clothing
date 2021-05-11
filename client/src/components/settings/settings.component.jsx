import UserSettings from './user-settings/user-settings.component.jsx';
import PasswordSettings from './password-settings/password-settings.component';

import { SettingsContainer } from './settings.styles';

const Settings = () => (
  <SettingsContainer>
    <UserSettings />
    <PasswordSettings />
  </SettingsContainer>
);

export default Settings;
