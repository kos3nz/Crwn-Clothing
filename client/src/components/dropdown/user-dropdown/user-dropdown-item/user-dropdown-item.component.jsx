import { UserDropdownItemContainer } from './user-dropdown-item.styles';

const UserDropdownItem = ({ children, ...otherProps }) => (
  <UserDropdownItemContainer {...otherProps}>
    {children}
  </UserDropdownItemContainer>
);

export default UserDropdownItem;
