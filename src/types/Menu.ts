// Menu Item
type MenuItemType = {
  id: string;
  icon?: React.ReactNode; // Sử dụng ReactNode cho icon để có thể truyền component hoặc các phần tử React khác
  title: string;
  to?: string;
  children?: MenuItemChildrenType;
  component?: JSX.Element | undefined; // Cho phép truyền component cho mục menu
  separator?: boolean; // Đường phân cách giữa các mục trong Menu
  type?: string; // Cho biết đang ở cấp độ Menu nào
  code?: string; // Languages
};

type MenuItemChildrenType = MenuItemDataType & {
  label?: string;
  compact?: boolean; // Đây là custom style lại cho btn nhỏ gọn hơn
};

type MenuItemDataType = {
  data: MenuItemType[];
};

export type { MenuItemType, MenuItemChildrenType, MenuItemDataType };
