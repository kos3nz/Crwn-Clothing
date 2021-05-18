import { HeartIcon } from './heart.styles';
import { IconContainer } from '../icon-container/icon-container.styles';

const Heart = ({ top, right, left, bottom, clicked, ...otherProps }) => (
  <IconContainer
    top={top}
    right={right}
    left={left}
    bottom={bottom}
    {...otherProps}
  >
    <HeartIcon clicked={clicked} />
  </IconContainer>
);

export default Heart;
