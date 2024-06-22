import Button from '~/components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { MenuItemChildrenType, MenuItemType } from '~/types/Menu';

const cx = classNames.bind(styles);

type MenuItemProps = {
  item: MenuItemType; // Thông tin về item menu để hiển thị menu-item
  compact?: boolean; // Có sử dụng lớp 'compact' hay không
  onClick?: (item: MenuItemType, currentMenu: MenuItemChildrenType) => void; // Hàm xử lý khi một mục menu được nhấn
};

function MenuItem({ item, compact = false, onClick }: MenuItemProps) {
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
