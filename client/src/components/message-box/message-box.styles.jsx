import styled from 'styled-components';

export const MessageBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    margin-bottom: 5px;
  }

  textarea {
    border: none;
    border-radius: 5px;
    padding: 5px;
  }
`;
