import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type ButtonType = string | React.ComponentType<any>;

interface ButtonPropsAdditional {
  [passProps: string]: any; // Các props và xử lý sự kiện khác
  className?: string; // Tên lớp CSS bổ sung
  to?: string; // Liên kết React Router
  href?: string; // Liên kết thẻ a
}

interface ButtonProps extends ButtonPropsAdditional {
  children: React.ReactNode; // Nội dung hoặc văn bản
  leftIcon?: React.ReactNode; // Biểu tượng bên trái
  rightIcon?: React.ReactNode; // Biểu tượng bên phải
  rounded?: boolean; // Bo góc
  text?: boolean; // Hiển thị văn bản
  outline?: boolean; // Kiểu viền
  primary?: boolean; // Nút chính
  disabled?: boolean; // Vô hiệu hóa
  large?: boolean; // Kích thước lớn
}

// Hàm xóa xử lý sự kiện nếu nút bị vô hiệu hóa
const removeEventsOnDisabled = (disabled: boolean, args: any) => {
  if (disabled) {
    Object.keys(args).forEach((key) => {
      if (key.startsWith('on') && typeof args[key] === 'function') {
        delete args[key];
      }
    });
  }
};

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
}: ButtonProps) {
  // Xóa các sự kiện nếu nút bị vô hiệu hóa
  removeEventsOnDisabled(disabled, passProps);

  // Thiết lập tên lớp CSS
  const classes = cx('wrapper', {
    rounded,
    text,
    outline,
    primary,
    disabled,
    large,
    [className as string]: className,
  });

  // Gắn thuộc tính to hoặc href nếu cần thiết
  const props: ButtonPropsAdditional = {
    ...passProps,
    className: classes,
  };

  // Xác định loại thành phần
  let Comp: ButtonType = 'button';

  if (to) {
    Comp = Link;
    props.to = to; // Thiết lập 'to' nếu sử dụng Link
  } else if (href) {
    Comp = 'a';
    props.href = href; // Thiết lập 'href' nếu sử dụng thẻ a
  }

  return (
    <Comp {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
