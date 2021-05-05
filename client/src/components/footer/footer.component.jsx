import { Link } from 'react-router-dom';

import {
  FooterContainer,
  FooterList,
  FooterItem,
  CopyrightAndIcons,
  Copyright,
  IconsContainer,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
} from './footer.styles';

const footerMenu = [
  'Find Our store',
  'Shipping',
  'Privacy Policy',
  'Contact Us',
  'Work with us',
  'Terms & Conditions',
];

const Footer = () => (
  <FooterContainer>
    <FooterList>
      {footerMenu.map((val) => (
        <FooterItem key={val}>
          {val === 'Contact Us' ? (
            <Link to="/contact">{val}</Link>
          ) : (
            <button>{val}</button>
          )}
        </FooterItem>
      ))}
    </FooterList>
    <CopyrightAndIcons>
      <Copyright>
        &copy; Copyright 2021 @ Crwn Clothing. I appreciate this amazing
        react/redux course. I've learned a lot of stuff and had so much fun!
        Thank you, Yihua and Andrei.
      </Copyright>
      <IconsContainer>
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
      </IconsContainer>
    </CopyrightAndIcons>
  </FooterContainer>
);

export default Footer;
