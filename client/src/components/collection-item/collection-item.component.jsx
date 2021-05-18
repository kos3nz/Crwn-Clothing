import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import Heart from '../icons/heart/heart.component';

import { addItem } from '../../redux/cart/cart.actions';
import { toggleFavorite } from '../../redux/favorites/favorites.actions';

import './collection-item.styles.scss';

import { selectCurrentUser } from '../../redux/user/user.selectors';

//## =============== styled component =============== ##//

// CustomButton にスタイル追加
const additionalStyleForButton = css`
  width: 80%;
  position: absolute;
  top: 70%;
  display: none;

  @media only screen and (max-width: 900px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 5px;
  }
`;

const CollectionItemButton = styled(CustomButton)`
  ${additionalStyleForButton}
`;

//## =============== Component =============== ##//

const CollectionItem = ({
  item,
  isFavorite,
  addItem,
  toggleFavorite,
  // currentUser,
}) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>
      <CollectionItemButton
        onClick={() => addItem(item)}
        inverted
        className="collection-item__button" // 従来通り className で追加も可能
      >
        Add to cart
      </CollectionItemButton>
      {/* {currentUser && ( */}
      <Heart
        top="10px"
        right="10px"
        clicked={isFavorite}
        className="collection-item__heart"
        onClick={() => toggleFavorite(item)}
      />
      {/* )} */}
    </div>
  );
};

//## =============== Redux =============== ##//

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  toggleFavorite: (item) => dispatch(toggleFavorite(item)),
});

//## =============== Export =============== ##//

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
