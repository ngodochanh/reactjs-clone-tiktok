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

// Hàm xóa xử lý sự kiện nếu nút bị vô hiệu hóa
const removeEventsOnDisabled = (disabled, args) => {
  if (disabled) {
    Object.keys(args).forEach((key) => {
      if (key.startsWith('on') && typeof args[key] === 'function') {
        delete args[key];
      }
    });
  }
};

/**
 * Component Button
 *
 * @param {React.ReactNode} children - Nội dung hoặc văn bản của nút.
 * @param {React.ReactNode} leftIcon - Biểu tượng bên trái của nút.
 * @param {React.ReactNode} rightIcon - Biểu tượng bên phải của nút.
 * @param {string} to - Đích của liên kết React Router.
 * @param {string} href - Đích của liên kết thẻ a.
 * @param {boolean} rounded - Cho phép bo góc nút.
 * @param {boolean} text - Nút chỉ hiển thị văn bản.
 * @param {boolean} outline - Nút có kiểu viền.
 * @param {boolean} primary - Nút chính.
 * @param {boolean} disabled - Nút bị vô hiệu hóa.
 * @param {boolean} large - Kích thước lớn của nút.
 * @param {string} className - Tên lớp CSS bổ sung cho nút.
 * @param {...any} passProps - Các props và xử lý sự kiện khác cho nút.
 *
 * @returns {JSX.Element} - Component nút đã render.
 */
function Button({
  children,
  leftIcon,
  rightIcon,
  to,
  href,
  rounded = false,
  text = false,
  outline = false,
  primary = false,
  disabled = false,
  large = false,
  className,
  ...passProps
}) {
  // Xóa các sự kiện nếu nút bị vô hiệu hóa
  removeEventsOnDisabled(disabled, passProps);

  // Xác định loại thành phần
  let Comp = ButtonFactory({ to, href });

  // Thiết lập tên lớp CSS
  const classes = cx('wrapper', {
    rounded,
    text,
    outline,
    primary,
    disabled,
    large,
    [className]: className,
  });

  // Gắn thuộc tính to hoặc href nếu cần thiết
  const props = {
    ...passProps,
    className: classes,
    ...(to && { to }), // Thiết lập 'to' nếu sử dụng Link
    ...(href && { href }), // Thiết lập 'href' nếu sử dụng thẻ a
  };

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
