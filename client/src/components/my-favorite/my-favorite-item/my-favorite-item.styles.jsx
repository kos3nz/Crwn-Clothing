import styled from 'styled-components';

export const MyFavoriteItemWrapper = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
`;

export const ItemImage = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  width: 100%;
  height: 90%;
  background-size: cover;
  background-position: center;
  transition: all 0.3s;
`;

export const ItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
`;
