import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { H1 } from '../../components/styled-components/text.styled-components.jsx';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import {
  // selectIsCollectionsFetching,
  selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selectors';

//## =============== Component =============== ##//

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// the parent route component pass history, location, match properties as props
// props = {history, location, match, ...}
const ShopPage = ({
  match,
  // isCollectionsFetching,
  isCollectionsLoaded,
  fetchCollectionsStartAsync,
}) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="shop-page">
      <H1 mgBtm="20px">Shop</H1>
      {/* <Route exact path={`${match.path}`} component={CollectionOverview} /> */}
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner
            isLoading={!isCollectionsLoaded}
            {...props}
          />
          // passing props containing {history, location, match}
        )}
      />
      {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={!isCollectionsLoaded}
            {...props}
          />
        )}
      />
    </div>
  );
};

//## =============== Redux =============== ##//

const mapStateToProps = createStructuredSelector({
  // isCollectionsFetching: selectIsCollectionsFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
/* ==============================
NOTE:= Redux-thunk
  -- If redux-thunk middleware is enabled, any time I attempt to dispatch a "Function" instead of an object, this middleware will call that function with dispatch method itself as the first argument.
============================== */

//## =============== Export =============== ##//

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
