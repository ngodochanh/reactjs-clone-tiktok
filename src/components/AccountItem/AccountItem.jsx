import images, { Verified } from '~/assets/images';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import UserAvatar from '../UserAvatar';

const cx = classNames.bind(styles);

/**
 * Component AccountItem
 *
 * Props:
 * - avatarImage: Hình ảnh
 * - avatarAlt: Mô tả hình ảnh
 * - fallBack: Nếu đường dẫn hình ảnh lỗi thì lấy hình ảnh này
 * - username
 * - nickname
 * - verified: tích xanh
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
    <article className={cx('wrapper')}>
      {/* Avatar */}
      <UserAvatar avatarImage={avatarImage} avatarAlt={avatarAlt} fallBack={fallBack} medium />

      {/* Info */}
      <section className={cx('info')}>
        {/* Username */}
        <div className={cx('username')}>
          <h5>{username}</h5>

          {verified && <Verified />}
        </div>
        {/* Nickname */}
        <p className={cx('nickname')}>{nickname}</p>
      </section>
    </article>
  );
}

export default AccountItem;
