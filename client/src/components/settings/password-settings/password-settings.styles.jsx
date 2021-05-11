import styled from 'styled-components';

export const PasswordSettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  width: 100%;

  form {
    width: 80%;

    @media only screen and (max-width: 900px) {
      width: 90%;
    }

    @media only screen and (max-width: 500px) {
      width: 100%;
    }
  }
`;
