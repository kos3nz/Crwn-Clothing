import styled from 'styled-components';

export const PurchaseCard = styled.div`
  height: 40vh;
  width: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #444;

  @media only screen and (max-width: 900px) {
    font-size: 15px;
    width: 80vw;
  }
`;

export const H1Message = styled.h1`
  margin-bottom: 20px;
`;

export const Message = styled.p`
  font-weight: bold;
`;

export const EmailLink = styled.span`
  color: #55b6c2;
  font-weight: bold;
  border-bottom: 1px solid #55b6c2;
  margin-left: 5px;
  cursor: pointer;
`;
