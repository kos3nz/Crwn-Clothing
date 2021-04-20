import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  // (collections) => collections ? Object.keys(collections).map((key) => collections[key]) : []
  (collections) => Object.keys(collections).map((key) => collections[key])
);

// if SHOP_DATA is a object
export const selectShopCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections && collections[collectionUrlParam]
  )
);

// if SHOP_DATA is an array ↓
// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

// export const selectShopCollection = memoize((collectionUrlParam) =>
//   createSelector([selectShopCollections], (collections) =>
//     collections.find(
//       (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//     )
//   )
// );

export const selectIsCollectionsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShopCollections],
  (collections) => !!collections
);
