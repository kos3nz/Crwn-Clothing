import React from 'react';

import './cart-item.styles.scss';

//## =============== Component =============== ##//

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        ${price} x {quantity}
      </span>
    </div>
  </div>
);

//## =============== Export =============== ##//

export default React.memo(CartItem);
