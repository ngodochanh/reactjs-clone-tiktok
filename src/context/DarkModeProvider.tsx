import { useState, useEffect, createContext } from 'react';

type IsDarkModeType = boolean;

type DarkModeContextType = {
  isDarkMode: IsDarkModeType;
  toggleDarkMode: () => void;
};

type DarkModeProviderProps = {
  children: React.ReactNode; // Các thành phần con của DarkModeProvider.
};

// Giá trị mặc định cho isDarkMode
const DEFAULT_DARK_MODE: IsDarkModeType = false;

// Định nghĩa enum cho Theme
enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

// Tạo ngữ cảnh cho chế độ Dark Mode
export const DarkModeContext = createContext<DarkModeContextType>({
  isDarkMode: DEFAULT_DARK_MODE,
  toggleDarkMode: () => {},
});

const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  // Khởi tạo state isDarkMode từ giá trị trong localStorage hoặc mặc định là false
  const [isDarkMode, setIsDarkMode] = useState<IsDarkModeType>(
    JSON.parse(localStorage.getItem('darkMode') as string) ?? DEFAULT_DARK_MODE,
  );

  useEffect(() => {
    // Lưu trữ giá trị isDarkMode vào localStorage mỗi khi nó thay đổi
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));

    // Cập nhật thuộc tính data-theme của thẻ body dựa trên giá trị isDarkMode
    document.body.setAttribute('data-theme', isDarkMode ? Theme.DARK : Theme.LIGHT);
  }, [isDarkMode]); // Chỉ chạy lại effect khi isDarkMode thay đổi

  // Hàm chuyển đổi giá trị của isDarkMode giữa true và false
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Cung cấp giá trị của isDarkMode và hàm toggleDarkMode cho các component con
  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
};

export default DarkModeProvider;
