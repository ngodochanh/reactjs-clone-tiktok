import images from '~/assets/images';
import styles from './UserAvatar.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);

/**
 * Component UserAvatar
 *
 * Props:
 * - avatarImage: Hình ảnh
 * - avatarAlt: Mô tả hình ảnh
 * - fallBack: Hình ảnh lỗi nếu muốn theo từ ngoài vào (customs)
 * - small: 32px x 32px
 * - medium: 40px x 40px
 * - average: 48px x 48px
 * - large: 166px x 166px
 */
function UserAvatar({
  avatarImage,
  avatarAlt = 'avatar',
  fallBack = images.noProfileImage, // Nếu ảnh lỗi không lấy từ ngoài vào thì lấy mặc định
  small = false,
  medium = false,
  average = false,
  large = false,
}) {
  // Khởi tạo trạng thái cho nguồn hình ảnh với giá trị avatarImage được cung cấp
  const [_fallback, setFallBack] = useState(avatarImage);

  // Hàm cập nhật hình ảnh dự phòng nếu hình ảnh avatar không tải được
  const handleImageLoadError = () => {
    setFallBack(fallBack);
  };

  const classes = cx('wrapper', {
    small,
    medium,
    average,
    large,
  });

  return (
    <figure className={classes}>
      <img src={_fallback} alt={avatarAlt} onError={handleImageLoadError} loading="lazy" />
    </figure>
  );
}

export default UserAvatar;
