import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/layouts';

/**
 * layout:
 *        - không có layout thì mặc định là DefaultLayout
 *        - layout là null: thì không có layout
 *        - layout có giá trị: thì layout là đặc biệt (được truyền vào)
 */

// Không đăng nhập vẫn xem được
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
];

// Đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
