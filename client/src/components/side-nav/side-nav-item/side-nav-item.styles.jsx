import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const NavItemsList = styled.li`
  list-style: none;
  margin: 10px 0;
`;

const getActiveStyle = ({ active }) => {
  if (active)
    return css`
      border-left: 5px solid #56b6c2;
      background-color: #555;
      cursor: unset;
    `;
};

export const NavItem = styled(({ active, ...props }) => <Link {...props} />)`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  background-color: #444;
  color: #eee;
  padding: 5px 30px;
  cursor: pointer;
  border-left: 0px solid #56b6c2;
  transition: all 0.2s ease;
  ${getActiveStyle}

  &:hover {
    border-left: 5px solid #56b6c2;
    background-color: #555;
  }

  @media only screen and (max-width: 900px) {
    padding: 5px 25px;
    font-size: 14px;
  }

  @media only screen and (max-width: 650px) {
    padding: 10px 0px;
    justify-content: center;
  }

  @media only screen and (max-width: 500px) {
    padding: 5px 0px;
  }

  span {
    margin-left: 15px;

    @media only screen and (max-width: 650px) {
      margin-left: 0;
    }

    @media only screen and (max-width: 500px) {
      display: none;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 650px) {
    display: none;
  }

  @media only screen and (max-width: 500px) {
    display: block;
  }
`;
