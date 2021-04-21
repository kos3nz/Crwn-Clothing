import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

//## =============== styled component =============== ##//

const styleH1 = css`
  color: #444;
  font-size: 40px;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: ${({ mgTp }) => {
    return mgTp && `${mgTp}`;
  }};
  margin-right: ${({ mgRt }) => {
    return mgRt && `${mgRt}`;
  }};
  margin-left: ${({ mgLft }) => {
    return mgLft && `${mgLft}`;
  }};
  margin-bottom: ${({ mgBtm }) => {
    return mgBtm && `${mgBtm}`;
  }};
`;

export const H1 = styled.h1`
  ${styleH1}
`;

export const LinkOverlay = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H1Link = styled(Link)`
  ${styleH1}

  align-self: ${({ alignSelf }) => {
    return alignSelf && `${alignSelf}`;
  }};

  &::after {
    content: '';
    display: block;
    height: 5px;
    width: 100%;
    background-color: #444;
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    transform: scaleX(0);
    /* transform-origin: center; */
  }

  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }
`;
