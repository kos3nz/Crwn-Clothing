import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { H1 } from '../../components/styled-components/text.styled-components.jsx';

//## =============== Component =============== ##//

// the parent route component pass history, location, match properties as props
// props = {history, location, match, ...}
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <H1 mgBtm="20px">Shop</H1>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

//## =============== Export =============== ##//

export default ShopPage;
