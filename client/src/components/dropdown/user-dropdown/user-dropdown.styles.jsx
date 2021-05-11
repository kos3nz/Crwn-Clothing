import styled from 'styled-components';

export const UserAccountWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  border: 1px solid #444;
  border-radius: 5px;
  background-color: #eee;
  top: 80px;
  right: 85px;
  text-align: center;
  z-index: 5;

  @media screen and (max-width: 900px) {
    top: 70px;
    right: 70px;
  }

  @media screen and (max-width: 500px) {
    top: 65px;
    right: 65px;
  }

  &::before {
    content: '';
    position: absolute;
    right: 30px;
    top: -10px;
    display: block;
    width: 0;
    height: 0;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #444;
    border-left: 10px solid transparent;

    @media screen and (max-width: 900px) {
      right: 25px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    right: 30px;
    top: -9px;
    display: block;
    width: 0;
    height: 0;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #eee;
    border-left: 10px solid transparent;

    @media screen and (max-width: 900px) {
      right: 25px;
    }
  }
`;
