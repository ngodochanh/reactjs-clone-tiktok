import styles from './Tooltip.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * Component Tooltip
 *
 * Props:
 * - children: element cần mô tả
 * - text: văn bản mô tả
 * - bottom: hướng tooltip bên dưới
 * - right: hướng tooltip bên phải
 * - className: Thêm class để customs css
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
