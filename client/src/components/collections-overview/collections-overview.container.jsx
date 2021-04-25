import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from './collections-overview.component.jsx';
import WithSpinner from '../with-spinner/with-spinner.component';

import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors';

//## =============== Redux =============== ##//

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

//## =============== Container =============== ##//

//:: Both codes below are completely equivalent

// const CollectionsOverviewContainer = connect(mapStateToProps)(
//   WithSpinner(CollectionsOverview)
// );

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

//## =============== Export =============== ##//

export default CollectionsOverviewContainer;
