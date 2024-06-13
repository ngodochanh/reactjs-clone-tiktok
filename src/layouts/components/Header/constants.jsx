import { DarkMode, Feedback, Idea, Keyboard, Languages } from '~/assets/images';

const MENU_ITEM = [
  { id: 'header-idea', icon: <Idea />, title: 'LIVE Creator Hub', to: '/live/creator' },
  { id: 'header-languages', icon: <Languages />, title: 'English' },
  { id: 'header-feedback', icon: <Feedback />, title: 'Feedback and help', to: '/feedback' },
  { id: 'header-keyboard', icon: <Keyboard />, title: 'Keyboard shortcuts' },
  { id: 'header-darkMode', icon: <DarkMode />, title: 'Dark mode' },
];

export { MENU_ITEM };
