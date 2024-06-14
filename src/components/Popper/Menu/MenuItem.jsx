import Button from '~/components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * item: Thông tin về item menu (để hiện thị menu-item)
 * compact: Thêm lớp 'menu-item-compact'
 * onClick: Hàm xử lý khi một mục menu được nhấn
 */
function MenuItem({ item, compact = false, onClick }) {
  console.log(compact);
  const classes = cx('menu-item', {
    'menu-item-compact': compact,
  });

  return (
    <Button leftIcon={item.icon} to={item.to} text className={classes} onClick={onClick}>
      {item.title}
    </Button>
  );
}

export default MenuItem;
