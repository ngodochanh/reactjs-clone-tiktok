import { DarkMode, Feedback, Idea, Keyboard, Languages } from '~/assets/images';
import Toggle from './DarkMode/Toggle';

const MENU_ITEM = [
  { id: 'header-idea', icon: <Idea />, title: 'LIVE Creator Hub', to: '/live/creator' },
  {
    id: 'header-languages',
    icon: <Languages />,
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

export { MENU_ITEM };
