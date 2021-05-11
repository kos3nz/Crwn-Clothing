import styled from 'styled-components';

export const MyFavoriteWrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 500px) {
    h2 {
      font-size: 20px;
    }
  }
`;
