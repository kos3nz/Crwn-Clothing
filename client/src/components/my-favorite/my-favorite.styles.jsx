import styled from 'styled-components';

export const MyFavoriteWrapper = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 500px) {
    h2 {
      font-size: 20px;
    }
  }
`;

export const FavoriteItemsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, minmax(110px, 1fr));
  column-gap: 10px;
  row-gap: 25px;

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

  @media only screen and (max-width: 710px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  @media only screen and (max-width: 550px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
`;
