import SideNavItem from './side-nav-item/side-nav-item.component';

import { ReactComponent as SettingIcon } from '../../assets/cog.svg';
import { ReactComponent as FavIcon } from '../../assets/heart.svg';
import { ReactComponent as OrderIcon } from '../../assets/truck.svg';
import { ReactComponent as SignoutIcon } from '../../assets/exit.svg';

import { SideNavMenu } from './side-nav.styles';

const iconStyles = {
  width: '14px',
  fill: '#eee',
};

const navItems = [
  {
    icon: <SettingIcon style={iconStyles} />,
    text: 'Settings',
    endpoint: 'settings',
  },
  {
    icon: <FavIcon style={iconStyles} />,
    text: 'My Favorite',
    endpoint: 'my-favorite',
  },
  {
    icon: <OrderIcon style={iconStyles} />,
    text: 'My Order',
    endpoint: 'my-order',
  },
  {
    icon: <SignoutIcon style={iconStyles} />,
    text: 'Sign Out',
    endpoint: 'sign-out',
  },
];

const SideNav = () => {
  return (
    <SideNavMenu>
      <ul>
        {navItems.map((item) => (
          <SideNavItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            endpoint={item.endpoint}
          />
        ))}
      </ul>
    </SideNavMenu>
  );
};

export default SideNav;
