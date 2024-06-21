import Button from '~/components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface MenuItemType {
  id: string;
  icon?: React.ReactNode; // Sử dụng ReactNode cho icon để có thể truyền component hoặc các phần tử React khác
  title: string;
  to?: string;
  children?: {
    label: string;
    compact?: boolean; // đây là custom style lại cho btn nhỏ gọn hơn
    data: MenuItemType[]; // có thẻ có kiểu dữ liệu khác
  };
  component?: JSX.Element | undefined; // Cho phép truyền component cho mục menu
  separator?: boolean; // đường phân cách giữa các mục trong Menu
  type?: string;
  code?: string;
}

interface MenuItemProps {
  item: MenuItemType; // Thông tin về item menu để hiển thị menu-item
  compact?: boolean; // Có sử dụng lớp 'compact' hay không
  onClick?: () => void; // Hàm xử lý khi một mục menu được nhấn
}

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
