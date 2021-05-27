import styled from 'styled-components';

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const AccountView = styled.div`
  width: 850px;
  min-height: 600px;
  border-radius: 5px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 900px) {
    width: 90%;
    min-height: 500px;
  }
`;

export const LeftSide = styled.div`
  width: 25%;
  background-color: #444;

  @media only screen and (max-width: 500px) {
    width: 15%;
  }
`;

export const RightSide = styled.div`
  width: 75%;

  @media only screen and (max-width: 500px) {
    width: 85%;
  }
`;
