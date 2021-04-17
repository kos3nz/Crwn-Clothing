// import { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import { SHOP_DATA } from '../../data/shopItems.data';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

//## =============== Component =============== ##//

const ShopPage = ({ collections }) => {
  // const [collections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

//## =============== Redux =============== ##//

// const mapStateToProps = (state) => ({
//   collections: selectShopCollections(state),
// });

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

//## =============== Export =============== ##//

export default connect(mapStateToProps)(ShopPage);
