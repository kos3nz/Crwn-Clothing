import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  // match.url(= the current page url), linkUrl(= shop/hats)
  <div
    className={`menu-item ${size}`}
    onClick={() => {
      history.push(`${match.url}${linkUrl}`);
      // console.log(history);
    }}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

// By wrapping a component with withRouter, the component will be able to get access to the properties(= history, location, match) that react-router-dom provides
export default withRouter(MenuItem);
