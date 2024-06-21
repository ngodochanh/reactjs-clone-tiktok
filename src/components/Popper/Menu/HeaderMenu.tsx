import { ChevronLeft } from '~/assets/icons';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type HeaderMenuProps = {
  label: string; // Tiêu đề
  onBack?: () => void; // Hàm xử lý khi nhấn quay trở lại
};

function HeaderMenu({ label, onBack = () => {} }: HeaderMenuProps) {
  return (
    <header className={cx('menu-header')} onClick={onBack}>
      <ChevronLeft />

      <h4 className={cx('menu-header-title')}>{label}</h4>
    </header>
  );
}

export default HeaderMenu;
