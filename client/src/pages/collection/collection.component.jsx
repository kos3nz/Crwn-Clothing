import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectShopCollection } from '../../redux/shop/shop.selectors';
import { selectFavoriteItems } from '../../redux/favorites/favorites.selectors';

import './collection.styles.scss';

//## =============== Component =============== ##//

const CollectionPage = ({ collection, favoriteItems }) => {
  // console.log(match.params.collectionId);
  // console.log(collection);
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => {
          return (
            <CollectionItem
              key={item.id}
              item={item}
              isFavorite={
                favoriteItems.find((fav) => fav.id === item.id) ? true : false
              }
            />
          );
        })}
      </div>
    </div>
  );
};

//## =============== Redux =============== ##//

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state),
  favoriteItems: selectFavoriteItems(state),
});

//## =============== Export =============== ##//

export default connect(mapStateToProps)(CollectionPage);

/* ==============================
NOTE:= Memoizing selectCollection and collectionUrlParam
One quick addition, our selectCollection function we just wrote is not memoized due to collectionUrlParam being passed in from our collection component's mapStateToProps running whenever our state changes and and calling a new instance of our selectCollection function. In this case collectionUrlParam is a dynamic argument meaning it can change, so to memoize selectCollection we actually have to memoize the whole function using a memoize helper function. We can leverage the lodash library, specifically their memoize helper function by adding it our packages like so:

If using yarn:
'yarn add lodash.memoize'

If using npm:
'npm install lodash.memoize'

And to use it, we import our newly installed memoize helper function at the top of shop.selectors.jsx like so:

import memoize from 'lodash.memoize';
And just wrap our selectCollection function with memoize like so:

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);

Memoize does the same idea of memoization as reselect does for our selectors, except this time we're memoizing the return of our function which returns our selector:

(collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
)

By wrapping this function is memoize, we're saying that whenever this function gets called and receives collectionUrlParam, I want to memoize the return of this function (in this case we return a selector). If this function gets called again with the same collectionUrlParam, don't rerun this function because we'll return the same value as last time, which we've memoized so just return the selector that's been stored.
============================== */
