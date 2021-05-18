import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import NoItems from '../no-items/no-items.component';
import MyFavoriteItem from './my-favorite-item/my-favorite-item.component';

import { MyFavoriteWrapper, FavoriteItemsWrapper } from './my-favorite.styles';

import { selectFavoriteItems } from '../../redux/favorites/favorites.selectors';

//## =============== Component =============== ##//

const MyFavorite = ({ favoriteItems }) => (
  <MyFavoriteWrapper>
    <h2>My Favorite Items</h2>
    {favoriteItems.length > 0 ? (
      <FavoriteItemsWrapper>
        {favoriteItems.map((fav) => (
          <MyFavoriteItem key={fav.id} item={fav} isFavorite />
        ))}
      </FavoriteItemsWrapper>
    ) : (
      <NoItems>You have no favorite items yet.</NoItems>
    )}
  </MyFavoriteWrapper>
);

//## =============== Redux =============== ##//

const mapStateToProps = createStructuredSelector({
  favoriteItems: selectFavoriteItems,
});

//## =============== Export =============== ##//

export default connect(mapStateToProps)(MyFavorite);
