import styled from 'styled-components';

import { ReactComponent as HeartSVG } from '../../../assets/heart.svg';

export const HeartIcon = styled(({ clicked, ...props }) => (
  <HeartSVG {...props} />
))`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 15px;
  fill: ${({ clicked }) => (clicked ? '#ff7683' : '#aaa')};
  transition: all 0.2s;
`;
