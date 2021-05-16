import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';
import Heart from '../heart/heart.component';

import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

import { useState } from 'react';

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

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((clicked) => !clicked);
  };

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
      <Heart
        top="10px"
        right="10px"
        clicked={clicked}
        className="collection-item__heart"
        onClick={handleClick}
      />
    </div>
  );
};

//## =============== Redux =============== ##//

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

//## =============== Export =============== ##//

export default connect(null, mapDispatchToProps)(CollectionItem);
