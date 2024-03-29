import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 25px 20px;

  @media only screen and (max-width: 900px) {
    padding: 0;
  }
`;
