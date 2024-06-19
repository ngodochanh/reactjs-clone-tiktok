import { useState, useEffect, createContext } from 'react';

// Tạo ngữ cảnh cho chế độ Dark Mode
export const DarkModeContext = createContext();

/**
 * DarkModeProvider Component
 *
 * @param {React.ReactNode} children - Các thành phần con của DarkModeProvider.
 *
 * @returns {JSX.Element} - Component DarkModeProvider đã render.
 */
const DarkModeProvider = ({ children }) => {
  // Khởi tạo state isDarkMode từ giá trị trong localStorage hoặc mặc định là false
  const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);

  useEffect(() => {
    // Lưu trữ giá trị isDarkMode vào localStorage mỗi khi nó thay đổi
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));

    // Cập nhật thuộc tính data-theme của thẻ body dựa trên giá trị isDarkMode
    if (isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]); // Chỉ chạy lại effect khi isDarkMode thay đổi

  // Hàm chuyển đổi giá trị của isDarkMode giữa true và false
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Cung cấp giá trị của isDarkMode và hàm toggleDarkMode cho các component con
  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
};

export default DarkModeProvider;
