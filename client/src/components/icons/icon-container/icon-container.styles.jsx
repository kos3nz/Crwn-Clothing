import styled from 'styled-components';

export const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  background-color: #eee;
  border: 1px solid #aaa;
  border-radius: 100px;
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  /* display: flex;
  justify-content: center;
  align-items: center; */
  z-index: 50;
  cursor: pointer;

  &:hover svg {
    opacity: 0.8;
  }
`;
