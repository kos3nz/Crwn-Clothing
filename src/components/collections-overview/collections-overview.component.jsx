import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component.jsx';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors.js';

import './collections-overview.styles.scss';

//## =============== Component =============== ##//

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

//## =============== Redux =============== ##//

// const mapStateToProps = (state) => ({
//   collections: selectShopCollections(state),
// });

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

//## =============== Export =============== ##//

export default connect(mapStateToProps)(CollectionsOverview);
