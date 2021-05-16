import { HeartIconContainer, HeartIcon } from './heart.styles';

const Heart = ({ top, right, clicked, ...otherProps }) => (
  <HeartIconContainer top={top} right={right} {...otherProps}>
    <HeartIcon clicked={clicked} />
  </HeartIconContainer>
);

export default Heart;
