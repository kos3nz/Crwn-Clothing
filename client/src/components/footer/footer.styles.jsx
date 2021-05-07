import styled, { css } from 'styled-components';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';

export const FooterContainer = styled.footer`
  margin-top: 125px;
  padding: 80px 60px 50px;
  width: 100%;
  background-color: #444;
  position: relative;

  @media only screen and (max-width: 900px) {
    padding: 65px 60px;
  }
  @media only screen and (max-width: 500px) {
    padding: 50px 40px;
  }
`;

export const FooterList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 30px;
`;

const footerItemStyle = css`
  color: #eee;
  font-size: 14px;
  font-weight: bold;
  text-transform: capitalize;
  transition: all 0.3s;
  cursor: pointer;
  padding-bottom: 3px;
  width: 100%;
  pointer-events: auto; /* trigger parents hover event when hovering button or a element*/

  @media only screen and (max-width: 500px) {
    font-size: 12px;
  }

  &:hover,
  &:active {
    transform: translateY(-5px);
  }
`;

export const FooterItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: all 0.3s;
  border-bottom: 1px solid #777;
  pointer-events: none; /* prevent triggering hover event when hovering li element */

  button {
    border: none;
    background-color: unset;
    font-family: 'Open Sans Condensed', sans-serif;
    ${footerItemStyle}
  }

  a {
    display: flex;
    justify-content: center;
    ${footerItemStyle}
  }

  &:hover {
    border-bottom: 1px solid #eee;
  }
`;

export const CopyrightAndIcons = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    margin-top: 40px;
    align-items: center;
  }
`;

export const Copyright = styled.p`
  width: 70%;
  color: #eee;
  font-size: 13px;
  letter-spacing: 0.7px;
  text-align: center;

  @media only screen and (max-width: 500px) {
    width: 90%;
    font-size: 10px;
  }
`;

export const IconsContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 500px) {
    width: 100%;
    margin-top: 40px;
    justify-content: center;
  }
`;

const iconStyles = css`
  width: 20px;
  fill: #eee;
  transition: all 0.3s;
`;

export const IconLink = styled.a`
  display: flex;
  align-items: center;
`;

export const InstagramIcon = styled(Instagram)`
  ${iconStyles}

  &:hover {
    fill: #e1306c;
  }
`;
export const FacebookIcon = styled(Facebook)`
  margin-left: 20px;
  ${iconStyles}

  &:hover {
    fill: #4267b2;
  }
`;
export const TwitterIcon = styled(Twitter)`
  margin-left: 20px;
  ${iconStyles}

  &:hover {
    fill: #1da1f2;
  }
`;
