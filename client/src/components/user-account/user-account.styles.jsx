import styled from 'styled-components';

export const UserAccountWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  border: none;
  background-color: #eee;

  @media screen and (max-width: 500px) {
    margin-right: 5px;
  }

  &:hover div,
  &:focus div {
    transform: rotate(180deg);
  }

  span {
    margin-left: 10px;
    font-weight: bold;
  }
`;

export const UserImage = styled.img`
  width: 30px;
  border-radius: 100px;
`;

export const Triangle = styled.div`
  margin-left: 4px;
  border: 6px solid transparent;
  border-bottom: 6px solid #444;
  transition: all 0.2s;
  transform-origin: 6px 10px;
`;
