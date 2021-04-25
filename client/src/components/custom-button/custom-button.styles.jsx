import styled, { css } from 'styled-components';

const defaultButtonStyles = css`
  border: none;
  background-color: #444;
  color: #eee;

  &:hover {
    background-color: #eee;
    color: #444;
    border: 1px solid #444;
  }
`;

const googleSigninButtonStyles = css`
  border: none;
  background-color: #4285f4;
  color: #eee;

  &:hover {
    background-color: #3371d6;
  }
`;

const invertedButtonStyles = css`
  background-color: #eee;
  color: #444;
  border: 1px solid #444;

  &:hover {
    background-color: #444;
    color: #eee;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) return googleSigninButtonStyles;
  if (props.inverted) return invertedButtonStyles;
  return defaultButtonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
