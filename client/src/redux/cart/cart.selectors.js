import { createSelector } from 'reselect';

// Redux state の cart 部分だけをセレクト
const selectCart = (state) => state.cart;

// const selectUser = state => state.user;

// select hidden prop
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.cartHidden
);

// createSelector() を使って cartItems を memoize (= caching)
// select cartItems prop
export const selectCartItems = createSelector(
  // [selectCart, selectUser],
  // (cart, user) => {}
  [selectCart],
  (cart) => cart.cartItems
);

// nest して item count も memoize
// This is being called only when the itemCount value is being changed
// select itemsCount prop
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    // console.log('selectCartItemsCount is being called');
    return cartItems.reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0);
  }
);

// select cartTotal
export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acm, cur) => acm + cur.price * cur.quantity, 0);
  }
);
