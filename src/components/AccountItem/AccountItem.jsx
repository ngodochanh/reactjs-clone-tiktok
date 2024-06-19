import { Verified } from '~/assets/icons';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import UserAvatar from '~/components/UserAvatar';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

/**
 * Component AccountItem
 *
 * @param {object} props - Các thuộc tính của component.
 * @param {string} props.avatarImage - Đường dẫn hình ảnh của người dùng.
 * @param {string} [props.avatarAlt='avatar'] - Mô tả hình ảnh người dùng (mặc định là 'avatar').
 * @param {string} props.fallBack - Hình ảnh dự phòng nếu đường dẫn hình ảnh lỗi.
 * @param {string} [props.username='hamburger_food'] - Tên người dùng hiển thị (mặc định là 'hamburger_food').
 * @param {string} [props.nickname='hamburger'] - Bí danh của người dùng.
 * @param {boolean} [props.verified=false] - Trạng thái xác nhận của người dùng (mặc định là false).
 * @returns {JSX.Element} - JSX của component AccountItem.
 */
function AccountItem({
  avatarImage,
  avatarAlt = 'avatar',
  fallBack,
  username = 'hamburger_food',
  nickname = 'hamburger',
  verified = false,
}) {
  return (
    <Link to={`/@${nickname}`} className={cx('wrapper')}>
      {/* Avatar */}
      <UserAvatar avatarImage={avatarImage} avatarAlt={avatarAlt} fallBack={fallBack} medium />

      {/* Info */}
      <div className={cx('info')}>
        {/* Username */}
        <div className={cx('username')}>
          <h5>{username}</h5>

          {verified && <Verified />}
        </div>
        {/* Nickname */}
        <p className={cx('nickname')}>{nickname}</p>
      </div>
    </Link>
  );
}

export default AccountItem;
