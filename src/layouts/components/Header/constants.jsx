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
} from '~/assets/images';
import Toggle from './DarkMode/Toggle';

const MENU_ITEMS = [
  { id: 'header-idea', icon: <Idea />, title: 'LIVE Creator Hub', to: '/live/creator' },
  {
    id: 'header-languages',
    icon: <Language />,
    title: 'English',
    children: {
      label: 'Languages',
      compact: true, // đây là custom style lại cho btn nhỏ gọn hơn
      data: [
        { id: 'languages-en', type: 'languages', code: 'en', title: 'English' },
        { id: 'languages-vi', type: 'languages', code: 'vi', title: 'Tiếng Việt' },
      ],
    },
  },
  { id: 'header-feedback', icon: <Feedback />, title: 'Feedback and help', to: '/feedback' },
  { id: 'header-keyboard', icon: <Keyboard />, title: 'Keyboard shortcuts' },
  { id: 'header-darkMode', icon: <DarkMode />, title: 'Dark mode', component: <Toggle /> },
];

const USER_MENU_ITEMS = [
  { id: 'view-profile', icon: <Profile />, title: 'View profile', to: '/profile' },
  { id: 'favorite', icon: <Favorite />, title: 'Favorites' },
  { id: 'get-coin', icon: <Coin />, title: 'Get Coins', to: '/coin' },
  { id: 'setting', icon: <Setting />, title: 'Settings' },
  { id: 'live-studio', icon: <Studio />, title: 'LIVE Studio', to: '/studio' },
  ...MENU_ITEMS,
  {
    id: 'log-out',
    icon: <LogOut />,
    title: 'Log out',
    separator: true, // đường phân cách giữa các mục trong Menu
  },
];

export { MENU_ITEMS, USER_MENU_ITEMS };
