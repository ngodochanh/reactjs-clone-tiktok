import { ChevronLeft } from '~/assets/images';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * Component HeaderMenu
 *
 * Props:
 * - label: Tiêu đề
 * - onBack: Hàm nhấn là quay trở lại menu trước
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
