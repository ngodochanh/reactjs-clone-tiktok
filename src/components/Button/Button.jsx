import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({
  children, // Nội dung
  leftIcon, // Icon trái
  rightIcon, // Icon phải
  to, // Đường dẫn Link của React Router
  href, // Đường dẫn link của thẻ a
  rounded = false, // Góc bo tròn
  text = false, // Chỉ hiển thị text, không có nền hoặc border
  outline = false, // Có border không có viền
  primary = false, // Nút chính
  disabled = false, // Vô hiệu hóa
  large = false, // Kích cỡ lớn
  className, // Thêm class
  ...passProps // Thêm attributes hay sự kiện, ...
}) {
  let Comp = 'button'; // Mặc định là button

  const props = {
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    // Loại nút Link
    props.to = to;
    Comp = Link;
  } else if (href) {
    // Loại nút a
    props.href = href;
    Comp = 'a';
  }

  // Thêm class
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
    <Comp className={classes} {...props}>
      {leftIcon && <img src={leftIcon} className={cx('icon')} />}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <img src={rightIcon} className={cx('icon')} />}
    </Comp>
  );
}

export default Button;
