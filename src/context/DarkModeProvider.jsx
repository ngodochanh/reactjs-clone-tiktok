import { useState, useEffect, createContext } from 'react';

export const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  // Khởi tạo state isDarkMode
  const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);

  useEffect(() => {
    // Lưu trữ isDarkMode vào localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));

    // Cập nhật thuộc tính data-theme của thẻ body khi
    if (isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  // Hàm chuyển đổi giá trị của isDarkMode giữa true và false
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
};

export default DarkModeProvider;
