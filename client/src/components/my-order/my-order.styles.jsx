import styled from 'styled-components';

export const MyOrderWrapper = styled.div`
  padding: 40px;
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
