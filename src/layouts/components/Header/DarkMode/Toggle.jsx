import styles from './Toggle.module.scss';
import classNames from 'classnames/bind';
import { useContext } from 'react';
import { DarkModeContext } from '~/context/DarkModeProvider';

const cx = classNames.bind(styles);

function Toggle() {
  // Sử dụng hook useContext để lấy isDarkMode và toggleDarkMode từ DarkModeContext
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  // Tạo class cho div toggle, thêm class 'active' nếu isDarkMode là true
  const classes = cx('wrapper', {
    active: isDarkMode,
  });

  // Div thay đổi chế độ dark mode khi được click
  return <div className={classes} onClick={toggleDarkMode}></div>;
}

export default Toggle;
