import styles from './Toggle.module.scss';
import classNames from 'classnames/bind';
import { useContext } from 'react';
import { DarkModeContext } from '~/context/DarkModeProvider';

const cx = classNames.bind(styles);

function Toggle() {
  // Sử dụng hook useDarkMode
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const classes = cx('wrapper', {
    active: isDarkMode, // Thêm class 'active' nếu isDarkMode là true
  });

  // Div thay đổi chế độ dark mode khi được click
  return <div className={classes} onClick={toggleDarkMode}></div>;
}

export default Toggle;
