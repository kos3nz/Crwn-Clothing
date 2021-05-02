import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media only screen and (max-width: 900px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
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
    margin-left: 0;
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
