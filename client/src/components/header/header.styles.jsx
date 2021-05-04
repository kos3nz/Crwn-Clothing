import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  /* height: 75px; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 25px; */
  position: fixed;
  top: 0;
  right: 0;
  background-color: #eee;
  z-index: 100;
  padding: 25px 40px 20px;
  transition: all 0.4s;

  @media only screen and (max-width: 900px) {
    padding: 20px 40px 10px;
  }

  @media only screen and (max-width: 500px) {
    padding: 12px 20px 10px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    width: 50px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 900px) {
    width: 80%;
  }
`;

const OptionContainerStyles = css`
  color: #444;
  font-size: 18px;
  font-weight: 600;
  padding: 10px 15px;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 2px;
  transition: all 0.3s;

  @media only screen and (max-width: 900px) {
    padding: 10px;
  }

  @media only screen and (max-width: 500px) {
    margin-left: 0;
    font-size: 16px;
  }

  &:hover {
    background-color: #444;
    color: #eee;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
