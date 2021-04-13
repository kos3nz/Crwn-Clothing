import React, { useState } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { SHOP_SECTIONS } from '../../data/shopItems.data';

const Directory = () => {
  const [sections] = useState(SHOP_SECTIONS);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
      {/* the code above is just equivalent to the  code written below
      {sections.map(({ id, title, imageUrl, size, linkUrl }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
      ))}
      */}
    </div>
  );
};

export default Directory;
