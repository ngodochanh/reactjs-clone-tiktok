import styles from './Tooltip.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type TooltipProps = {
  children: React.ReactNode; // Phần tử cần mô tả
  text: string; // Nội dung mô tả
  bottom?: boolean; // Vị trí phía dưới
  right?: boolean; // Vị trí bên phải
  className?: string; // Thêm lớp class để tùy chỉnh CSS
};

function Tooltip({ children, text, bottom = false, right = false, className }: TooltipProps) {
  const classes = cx('text', {
    bottom,
    right,
    [className as string]: className,
  });

  return (
    <div className={cx('wrapper')}>
      {children}
      <span className={classes}>{text}</span>
    </div>
  );
}

export default Tooltip;
