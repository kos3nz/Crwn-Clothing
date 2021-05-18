import { connect } from 'react-redux';

import Heart from '../../icons/heart/heart.component';
import ShopIcon from '../../icons/shop/shop-icon.component';

import {
  MyFavoriteItemWrapper,
  ItemImage,
  ItemFooter,
} from './my-favorite-item.styles';

import { addItem } from '../../../redux/cart/cart.actions';
import { toggleFavorite } from '../../../redux/favorites/favorites.actions';

//## =============== Component =============== ##//

const MyFavoriteItem = ({ item, isFavorite, addItem, toggleFavorite }) => {
  const { name, price, imageUrl } = item;

  return (
    <MyFavoriteItemWrapper>
      <ItemImage imageUrl={imageUrl} />
      <ItemFooter>
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </ItemFooter>
      <Heart
        bottom="25px"
        right="5px"
        clicked={isFavorite}
        onClick={() => toggleFavorite(item)}
      />
      <ShopIcon bottom="25px" left="5px" onClick={() => addItem(item)} />
    </MyFavoriteItemWrapper>
  );
};

//## =============== Redux =============== ##//

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  toggleFavorite: (item) => dispatch(toggleFavorite(item)),
});

//## =============== Export =============== ##//

export default connect(null, mapDispatchToProps)(MyFavoriteItem);
