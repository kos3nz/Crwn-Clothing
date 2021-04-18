import styled from 'styled-components';

//## =============== styled component =============== ##//

export const H1 = styled.h1`
  color: #444;
  font-size: 40px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: ${({ mgBtm }) => {
    return mgBtm && `${mgBtm}`;
  }};
  text-align: center;
`;
