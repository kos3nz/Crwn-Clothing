import styled from 'styled-components';

import { ReactComponent as HeartSVG } from '../../assets/heart.svg';

export const HeartIconContainer = styled.div`
  width: 30px;
  height: 30px;
  background-color: #eee;
  border-radius: 100px;
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  cursor: pointer;

  &:hover svg {
    opacity: 0.8;
  }
`;

export const HeartIcon = styled(({ clicked, ...props }) => (
  <HeartSVG {...props} />
))`
  width: 20px;
  height: 15px;
  fill: ${({ clicked }) => (clicked ? '#ff7683' : '#aaa')};
  transition: all 0.2s;
`;
