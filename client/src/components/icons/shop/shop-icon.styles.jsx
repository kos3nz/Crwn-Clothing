import styled from 'styled-components';

import { ReactComponent as ShopSVG } from '../../../assets/cart.svg';

export const ShopCartIcon = styled(ShopSVG)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-55%, -50%);
  width: 15px;
  height: 15px;
  fill: #444;
  transition: all 0.2s;
`;
