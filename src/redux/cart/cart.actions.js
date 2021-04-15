import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  // Since I only need to toggle the boolean value on hidden property, I only need to specify the type. I don't have to pass a payload value.
});
