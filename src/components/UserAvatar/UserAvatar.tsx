import { useState } from 'react';
import images from '~/assets/images';
import styles from './UserAvatar.module.scss';
import classNames from 'classnames/bind';
import { AvatarType } from '~/types/Avatar';

const cx = classNames.bind(styles);

type UserAvatarProps = AvatarType & {
  fallBack?: string; // Trường hợp muốn hình ảnh mặc định
  small?: boolean; // Kích thước nhỏ (32px x 32px)
  medium?: boolean; // Kích thước nhỏ (40px x 40px)
  average?: boolean; // Kích thước trung bình (48px x 48px)
  large?: boolean; // Kích thước lớn (166px x 166px)
};

function UserAvatar({
  avatarImage,
  avatarAlt,
  fallBack = images.noProfileImage, // Nếu ảnh lỗi không lấy từ ngoài vào thì lấy mặc định
  small = false,
  medium = false,
  average = false,
  large = false,
}: UserAvatarProps) {
  // Khởi tạo trạng thái cho nguồn hình ảnh với giá trị avatarImage được cung cấp
  const [_fallback, setFallBack] = useState<string>(avatarImage);

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
