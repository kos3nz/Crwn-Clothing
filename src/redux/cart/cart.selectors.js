import { createSelector } from 'reselect';

// Redux state の cart 部分だけをセレクト
const selectCart = (state) => state.cart;

// const selectUser = state => state.user;

// createSelector() を使って cartItems を memoize (= caching)
export const selectCartItems = createSelector(
  // [selectCart, selectUser],
  // (cart, user) => {}
  selectCart,
  (cart) => cart.cartItems
);

// nest して item count も memoize
// This is being called only when the itemCount value is being changed
export const selectCartItemsCount = createSelector(
  selectCartItems,
  (cartItems) => {
    console.log('selectCartItemsCount is being called');
    return cartItems.reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0);
  }
);
