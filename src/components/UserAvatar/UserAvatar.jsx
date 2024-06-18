import styles from './UserAvatar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * Component UserAvatar
 *
 * Props:
 * - avatarImage: Hình ảnh
 * - avatarAlt: Mô tả hình ảnh
 * - small: 32px x 32px
 * - medium: 40px x 40px
 * - average: 48px x 48px
 * - large: 166px x 166px
 */
function UserAvatar({
  avatarImage,
  avatarAlt = 'avatar',
  small = false,
  medium = false,
  average = false,
  large = false,
}) {
  const classes = cx('wrapper', {
    small,
    medium,
    average,
    large,
  });

  return (
    <figure className={classes}>
      <img src={avatarImage} alt={avatarAlt} />
    </figure>
  );
}

export default UserAvatar;
