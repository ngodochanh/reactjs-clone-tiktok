import { useEffect, useState } from 'react';

/**
 * Hook tùy chỉnh dùng để debounce một giá trị.
 *
 * @param {any} value - Giá trị cần debounce.
 * @param {number} delay - Thời gian trì hoãn tính bằng mili giây trước khi cập nhật giá trị debounce.
 * @returns {any} - Giá trị đã được debounce.
 */
function useDebounce(value: any, delay: number) {
  // State để lưu trữ giá trị debounce
  const [debouncedValue, setDebouncedValue] = useState<any>(value);

  useEffect(() => {
    // Thiết lập một timeout để cập nhật giá trị debounce sau thời gian trì hoãn đã định
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Hàm dọn dẹp để xóa timeout nếu effect được chạy lại
    return () => clearTimeout(handler);
  }, [value, delay]); // Chỉ chạy lại effect nếu value hoặc delay thay đổi

  // Trả về giá trị đã được debounce
  return debouncedValue;
}

export default useDebounce;
