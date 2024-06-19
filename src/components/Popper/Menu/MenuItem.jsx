import Button from '~/components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * Component MenuItem
 *
 * @param {object} item - Thông tin về item menu để hiển thị menu-item.
 * @param {boolean} compact - Có sử dụng lớp 'menu-item-compact' hay không.
 * @param {function} onClick - Hàm xử lý khi một mục menu được nhấn.
 *
 * @returns {JSX.Element} - Component MenuItem đã render.
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
