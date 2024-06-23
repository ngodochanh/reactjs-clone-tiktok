import {
  CompassRegular,
  CompassSolid,
  HomeRegular,
  HomeSolid,
  LiveRegular,
  LiveSolid,
  ProfileSidebar,
  UserGroupRegular,
  UserGroupSolid,
  UserLeftRegular,
  UserLeftSolid,
} from '~/assets/icons';
import config from '~/config';
import { MenuItemProps } from './SidebarTypes';

const NAVIGATION: MenuItemProps[] = [
  {
    id: 'home-sidebar',
    title: 'for you',
    iconSolid: <HomeSolid />,
    iconRegular: <HomeRegular />,
    to: config.routes.home,
  },
  {
    id: 'explore-sidebar',
    title: 'explore',
    iconSolid: <CompassSolid />,
    iconRegular: <CompassRegular />,
    to: config.routes.explore,
  },
  {
    id: 'following-sidebar',
    title: 'following',
    iconSolid: <UserLeftSolid />,
    iconRegular: <UserLeftRegular />,
    to: config.routes.following,
  },
  {
    id: 'friends-sidebar',
    title: 'friends',
    iconSolid: <UserGroupSolid />,
    iconRegular: <UserGroupRegular />,
    to: config.routes.friends,
  },
  {
    id: 'live-sidebar',
    title: 'live',
    iconSolid: <LiveSolid />,
    iconRegular: <LiveRegular />,
    to: config.routes.live,
  },
  {
    id: 'profile-sidebar',
    title: 'profile',
    iconSolid: <ProfileSidebar />,
    iconRegular: <ProfileSidebar />,
    to: config.routes.profile,
  },
];

export { NAVIGATION };
