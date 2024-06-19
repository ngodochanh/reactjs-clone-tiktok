import { ChevronLeft } from '~/assets/images';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * Component HeaderMenu
 *
 * @param {string} label - Tiêu đề của header menu.
 * @param {function} onBack - Hàm xử lý khi nhấn quay trở lại.
 *
 * @returns {JSX.Element} - Component HeaderMenu đã render.
 */
function HeaderMenu({ label, onBack }) {
  return (
    <header className={cx('menu-header')} onClick={onBack}>
      <ChevronLeft />

      <h4 className={cx('menu-header-title')}>{label}</h4>
    </header>
  );
}

export default HeaderMenu;
