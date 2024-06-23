type MenuItemProps = {
  id: string;
  title: string; // Tiêu đề
  iconSolid: React.ReactNode; // Biểu tượng khi active
  iconRegular: React.ReactNode; // Biểu tượng
  to: string; // Liên kết React Router
};

export type { MenuItemProps };
