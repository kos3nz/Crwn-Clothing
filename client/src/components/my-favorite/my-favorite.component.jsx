import NoItems from '../no-items/no-items.component';

import { MyFavoriteWrapper } from './my-favorite.styles';

const MyFavorite = () => (
  <MyFavoriteWrapper>
    <h2>My Favorite Items</h2>
    <NoItems>You have no favorite items yet.</NoItems>
  </MyFavoriteWrapper>
);

export default MyFavorite;
