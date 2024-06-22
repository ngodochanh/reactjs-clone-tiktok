import {
  Coin,
  DarkMode,
  Favorite,
  Feedback,
  Idea,
  Keyboard,
  Language,
  LogOut,
  Profile,
  Setting,
  Studio,
} from '~/assets/icons';
import Toggle from './DarkMode/Toggle';
import config from '~/config';
import { MenuItemType } from '~/types/Menu';

const MENU_ITEMS: MenuItemType[] = [
  {
    id: 'header-idea',
    icon: <Idea />,
    title: 'LIVE Creator Hub',
    to: config.routes.live,
  },
  {
    id: 'header-languages',
    icon: <Language />,
    title: 'English',
    children: {
      label: 'Languages',
      compact: true,
      data: [
        { id: 'languages-en', type: 'languages', code: 'en', title: 'English' },
        { id: 'languages-vi', type: 'languages', code: 'vi', title: 'Tiếng Việt' },
      ],
    },
  },
  {
    id: 'header-feedback',
    icon: <Feedback />,
    title: 'Feedback and help',
    to: config.routes.feedback,
  },
  {
    id: 'header-keyboard',
    icon: <Keyboard />,
    title: 'Keyboard shortcuts',
  },
  {
    id: 'header-darkMode',
    icon: <DarkMode />,
    title: 'Dark mode',
    component: <Toggle />,
  },
];

const USER_MENU_ITEMS = [
  { id: 'view-profile', icon: <Profile />, title: 'View profile', to: config.routes.profile },
  { id: 'favorite', icon: <Favorite />, title: 'Favorites' },
  { id: 'get-coin', icon: <Coin />, title: 'Get Coins', to: config.routes.coin },
  { id: 'setting', icon: <Setting />, title: 'Settings' },
  { id: 'live-studio', icon: <Studio />, title: 'LIVE Studio', to: config.routes.studio },
  ...MENU_ITEMS,
  {
    id: 'log-out',
    icon: <LogOut />,
    title: 'Log out',
    separator: true,
  },
];

export { MENU_ITEMS, USER_MENU_ITEMS };
