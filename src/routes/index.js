import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/layouts';

/**
 * Các chú thích về layout:
 *        - Nếu không có layout được chỉ định, mặc định sẽ sử dụng DefaultLayout.
 *        - Nếu layout là null: sẽ không có layout.
 *        - Nếu layout có giá trị: sẽ sử dụng layout đặc biệt được truyền vào.
 */

// Các route công khai (không cần đăng nhập vẫn có thể truy cập)
const publicRoutes = [
  { path: '/', component: Home }, // Route trang chủ
  { path: '/following', component: Following }, // Route trang Following
  { path: '/:nickname', component: Profile }, // Route trang Profile với tham số nickname
  { path: '/upload', component: Upload, layout: HeaderOnly }, // Route trang Upload với layout đặc biệt là HeaderOnly
];

// Các route riêng tư (phải đăng nhập mới có thể truy cập)
const privateRoutes = [];

export { publicRoutes, privateRoutes };
