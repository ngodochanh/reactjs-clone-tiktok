type NavigationType = {
  id: string;
  title: string; // Tiêu đề
  iconSolid: React.ReactNode; // Biểu tượng khi active
  iconRegular: React.ReactNode; // Biểu tượng
  to: string; // Liên kết React Router
};

type FooterMenuType = {
  seeMore?: boolean; // Có hoặc không có nút "Xem thêm"
  id: string;
  title: string; // Tiêu đề của content
  list: {
    id: string;
    label: string; // Nhãn hiển thị
    to: string; // Đường dẫn
  }[];
};

export type { NavigationType, FooterMenuType };
