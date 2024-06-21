import { Verified } from '~/assets/icons';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import UserAvatar from '~/components/UserAvatar';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

type AccountItemProps = {
  avatarImage: string; // Đường dẫn hình ảnh
  avatarAlt: string; // Mô tả hình ảnh
  username: string; // Tên người dùng
  nickname: string; // Bí danh
  verified?: boolean; // Tích xanh
};

function AccountItem({ avatarImage, avatarAlt, username, nickname, verified = false }: AccountItemProps) {
  return (
    <Link to={`/@${nickname}`} className={cx('wrapper')}>
      {/* Avatar */}
      <UserAvatar avatarImage={avatarImage} avatarAlt={avatarAlt} medium />

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
