// import React, { useState } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

// import { SHOP_SECTIONS } from '../../data/shopItems.data';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

//## =============== Component =============== ##//

const Directory = ({ sections }) => {
  // const [sections] = useState(SHOP_SECTIONS);

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

//## =============== Redux =============== ##//

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

//## =============== Export =============== ##//

export default connect(mapStateToProps)(Directory);
