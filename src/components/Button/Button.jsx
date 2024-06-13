import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// Định nghĩa các loại nút cho các props khác nhau
const buttonTypes = Object.freeze({
  href: 'a', // Thẻ a cho các liên kết ngoài
  to: Link, // Thành phần Link cho điều hướng nội bộ
});

// Hàm này để xác định loại thành phần nút
const ButtonFactory = (props) => {
  for (const [key, value] of Object.entries(props)) {
    if (Object.keys(props).includes(key) && value && value.length > 0) {
      return buttonTypes[key];
    }
  }
  return 'button'; // Mặc định là thẻ button
};

// Xóa các trình xử lý sự kiện nếu nút bị vô hiệu hóa
const removeEventsOnDisabled = (disabled, args) => {
  if (disabled) {
    Object.keys(args).forEach((key) => {
      if (key.startsWith('on') && typeof args[key] === 'function') {
        delete args[key];
      }
    });
  }
};

function Button({
  children, // Văn bản hoặc nội dung của nút
  leftIcon, // Icon bên trái
  rightIcon, // Icon bên phải
  to, // Liên kết của React Router
  href, // Liên kết thẻ a
  rounded = false, // Góc bo tròn
  text = false, // Nút chỉ có văn bản
  outline = false, // Nút viền
  primary = false, // Nút chính
  disabled = false, // Trạng thái vô hiệu hóa
  large = false, // Kích cỡ lớn
  className, // Thêm tên class
  ...passProps // Thêm các props và trình xử lý sự kiện khác
}) {
  // Xóa các sự kiện nếu nút bị vô hiệu hóa
  removeEventsOnDisabled(disabled, passProps);

  // Xác định loại thành phần
  let Comp = ButtonFactory({ to, href });

  // Thiết lập tên class
  const classes = cx('wrapper', {
    rounded,
    text,
    outline,
    primary,
    disabled,
    large,
    [className]: className,
  });

  return (
    <Comp className={classes} {...passProps}>
      {leftIcon && <img src={leftIcon.url} alt={leftIcon.alt} className={cx('icon')} />}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <img src={rightIcon.url} alt={rightIcon.alt} className={cx('icon')} />}
    </Comp>
  );
}

export default Button;
