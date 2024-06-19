import styles from './Tooltip.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * Component Tooltip
 *
 * @param {React.ReactNode} children - Phần tử cần mô tả bằng Tooltip.
 * @param {string} text - Nội dung mô tả của Tooltip.
 * @param {boolean} bottom - Hiển thị Tooltip ở phía dưới.
 * @param {boolean} right - Hiển thị Tooltip ở phía bên phải.
 * @param {string} className - Thêm lớp class để tùy chỉnh CSS.
 *
 * @returns {JSX.Element} - Component Tooltip đã render.
 */
function Tooltip({ children, text, bottom = false, right = false, className }) {
  const classes = cx('text', {
    bottom,
    right,
    [className]: className,
  });

  return (
    <div className={cx('wrapper')}>
      {children}
      <span className={classes}>{text}</span>
    </div>
  );
}

export default Tooltip;
