import { lazy } from 'react';

import SideNav from '../../components/side-nav/side-nav.component';

import {
  AccountContainer,
  AccountView,
  LeftSide,
  RightSide,
} from './account.styles';

//## =============== Code Splitting =============== ##//

const Settings = lazy(() =>
  import('../../components/settings/settings.component.jsx')
);
const MyFavorite = lazy(() =>
  import('../../components/my-favorite/my-favorite.component')
);
const MyOrder = lazy(() =>
  import('../../components/my-order/my-order.component')
);

//## =============== Component =============== ##//

const AccountPage = ({ params }) => {
  return (
    <AccountContainer>
      <AccountView>
        <LeftSide>
          <SideNav />
        </LeftSide>
        <RightSide>
          {params.sidenav === 'settings' && <Settings />}
          {params.sidenav === 'my-favorite' && <MyFavorite />}
          {params.sidenav === 'my-order' && <MyOrder />}
        </RightSide>
      </AccountView>
    </AccountContainer>
  );
};

export default AccountPage;
