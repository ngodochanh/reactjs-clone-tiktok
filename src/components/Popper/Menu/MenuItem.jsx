import Button from '~/components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * Component MenuItem
 *
 * Props:
 * - item: Thông tin về item menu (để hiện thị menu-item)
 * - compact: Thêm lớp 'menu-item-compact'
 * - onClick: Hàm xử lý khi một mục menu được nhấn
 */
function MenuItem({ item, compact = false, onClick }) {
  const classes = cx('menu-item', {
    compact,
    separator: item.separator,
  });

  // item.component: là toggle dark mode (kiểu giống vậy)
  return (
    <Button leftIcon={item.icon} rightIcon={item.component} to={item.to} text className={classes} onClick={onClick}>
      {item.title}
    </Button>
  );
}

export default MenuItem;
