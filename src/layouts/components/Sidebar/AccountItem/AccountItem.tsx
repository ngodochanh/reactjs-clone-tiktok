import { Verified } from '~/assets/icons';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import UserAvatar from '~/components/UserAvatar';
import { Link } from 'react-router-dom';
import { AvatarType } from '~/types/Avatar';

const cx = classNames.bind(styles);

type AccountItemProps = AvatarType & {
  username: string; // Tên người dùng
  nickname: string; // Bí danh
  verified?: boolean; // Tích xanh
};

function AccountItem({ avatarImage, avatarAlt, username, nickname, verified = false }: AccountItemProps) {
  return (
    <Link to={`/@${nickname}`} className={cx('wrapper')}>
      {/* Avatar */}
      <UserAvatar avatarImage={avatarImage} avatarAlt={avatarAlt} small />

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
