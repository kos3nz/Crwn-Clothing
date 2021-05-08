import { MessageBoxContainer } from './message-box.styles';

const MessageBox = ({ handleChange, label, ...otherProps }) => (
  <MessageBoxContainer>
    {label && <label htmlFor={label}>{`${label.toUpperCase()}:`}</label>}
    <textarea onChange={handleChange} {...otherProps}></textarea>
  </MessageBoxContainer>
);

export default MessageBox;
