import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { H1 } from '../../components/styled-components/text.styled-components.jsx';

import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

//## =============== Component =============== ##//

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// the parent route component pass history, location, match properties as props
// props = {history, location, match, ...}
const ShopPage = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    //                            ↓ I don't think I need async keyword here
    // collectionRef.onSnapshot( async (snapshot) => {
    const unsubscribeFromSnapshot = collectionRef.onSnapshot((snapshot) => {
      console.log(snapshot);
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      console.log(collectionsMap);
      updateCollections(collectionsMap);
      setLoading((loading) => !loading);
    });

    return () => {
      unsubscribeFromSnapshot();
    };
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
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          // passing props containing {history, location, match}
        )}
      />
      {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

//## =============== Redux =============== ##//

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

//## =============== Export =============== ##//

export default connect(null, mapDispatchToProps)(ShopPage);
