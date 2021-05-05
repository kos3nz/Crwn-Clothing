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
  'Download Our Catalog',
  'Contact Us',
  'Work with us',
];

const Footer = () => (
  <FooterContainer>
    <FooterList>
      {footerMenu.map((str) => (
        <FooterItem key={str}>
          <button>{str}</button>
        </FooterItem>
      ))}
    </FooterList>
    <CopyrightAndIcons>
      <Copyright>
        &copy; Copyright 2021 by Crwn Clothing. I appreciate this amazing
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
