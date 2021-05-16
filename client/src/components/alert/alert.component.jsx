import { AlertWrapper } from './alert.styles';

const Alert = ({ children, ...otherProps }) => (
  <AlertWrapper {...otherProps}>{children}</AlertWrapper>
);

export default Alert;
