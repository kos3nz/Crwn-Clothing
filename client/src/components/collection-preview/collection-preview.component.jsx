import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

import { selectFavoriteItems } from '../../redux/favorites/favorites.selectors';

//## =============== Component =============== ##//

const CollectionPreview = ({ title, items, favoriteItems }) => (
  <div className="collection-preview">
    <Link to={`shop/${title.toLowerCase()}`} className="title">
      {title.toUpperCase()}
    </Link>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => {
          const favorite = favoriteItems.find((fav) => fav.id === item.id);

          return (
            <CollectionItem
              key={item.id}
              item={item}
              isFavorite={favorite ? true : false}
            />
          );
        })}
    </div>
  </div>
);

//## =============== Redux =============== ##//

const mapStateToProps = createStructuredSelector({
  favoriteItems: selectFavoriteItems,
});

//## =============== Export =============== ##//
export default connect(mapStateToProps)(CollectionPreview);
