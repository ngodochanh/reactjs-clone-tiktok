import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/layouts';
import config from '~/config';

/**
 * Các chú thích về layout:
 *        - Nếu không có layout được chỉ định, mặc định sẽ sử dụng DefaultLayout.
 *        - Nếu layout là null: sẽ không có layout.
 *        - Nếu layout có giá trị: sẽ sử dụng layout đặc biệt được truyền vào.
 */

// Các route công khai (không cần đăng nhập vẫn có thể truy cập)
const publicRoutes = [
  { path: config.routes.home, component: Home }, // Trang chủ
  { path: config.routes.following, component: Following }, // Trang Following
  { path: config.routes.profile, component: Profile }, // Trang Profile với tham số nickname
  { path: config.routes.upload, component: Upload, layout: HeaderOnly }, // Trang Upload với layout đặc biệt là HeaderOnly
];

// Các route riêng tư (phải đăng nhập mới có thể truy cập)
const privateRoutes = [];

export { publicRoutes, privateRoutes };
