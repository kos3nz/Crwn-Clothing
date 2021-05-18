import { ShopCartIcon } from './shop-icon.styles';
import { IconContainer } from '../icon-container/icon-container.styles';

const ShopIcon = ({ top, right, left, bottom, clicked, ...otherProps }) => (
  <IconContainer
    top={top}
    right={right}
    left={left}
    bottom={bottom}
    {...otherProps}
  >
    <ShopCartIcon />
  </IconContainer>
);

export default ShopIcon;
