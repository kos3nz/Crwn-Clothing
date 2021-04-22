import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import CollectionOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
// import WithSpinner from '../../components/with-spinner/with-spinner.component';

import {
  H1Link,
  LinkOverlay,
} from '../../components/styled-components/text.styled-components.jsx';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
// import {
// selectIsCollectionsFetching,
// selectIsCollectionsLoaded,
// } from '../../redux/shop/shop.selectors';

//## =============== Component =============== ##//

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// the parent route component pass history, location, match properties as props
// props = {history, location, match, ...}
const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="shop-page">
      <LinkOverlay>
        <H1Link to="/shop" alignself="center" mgbtm="20px">
          Shop
        </H1Link>
      </LinkOverlay>
      {/* <Route exact path={`${match.path}`} component={CollectionOverview} /> */}
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
        // render={(props) => (
        //   // passing props containing {history, location, match}
        //   <CollectionPageWithSpinner
        //     isLoading={!isCollectionsLoaded}
        //     {...props}
        //   />
        // )}
      />
    </div>
  );
};

//## =============== Redux =============== ##//

// const mapStateToProps = createStructuredSelector({
// isCollectionsFetching: selectIsCollectionsFetching,
// isCollectionsLoaded: selectIsCollectionsLoaded,
// });

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
/* ==============================
NOTE:= Redux-thunk
  -- If redux-thunk middleware is enabled, any time redux attempts to dispatch a "Function" instead of an object, this middleware will call that function with dispatch method itself as the first argument.
============================== */

//## =============== Export =============== ##//

export default connect(null, mapDispatchToProps)(ShopPage);
