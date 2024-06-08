import { Home } from '~/pages/Home';
import { Following } from '~/pages/Following';
import { Profile } from '~/pages/Profile';

// Không đăng nhập vẫn xem được
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
];

// Đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
