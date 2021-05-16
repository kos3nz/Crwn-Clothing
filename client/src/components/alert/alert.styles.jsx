import styled, { css } from 'styled-components';

const success = css`
  background-color: #4bca81;
`;
const error = css`
  background-color: #cc0000;
`;

const alertType = (props) => {
  if (props.success) return success;
  if (props.error) return error;
};

export const AlertWrapper = styled.div`
  color: #eee;
  padding: 15px 40px;
  font-size: 17px;
  font-weight: bold;
  border-radius: 5px;
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 300;

  @media only screen and (max-width: 500px) {
    padding: 10px 25px;
    font-size: 15px;
  }

  ${alertType}
`;
