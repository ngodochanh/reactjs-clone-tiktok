import WrapperPopper from '~/components/Popper';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

/**
 * children: Nút để hover hiển thị danh sách
 * menuList: Mảng danh sách menu
 * menuClassName: class thẻ wrapper (nút hover và danh sách)
 * menuPopupClassName: class thẻ danh sách
 *
 * Lưu ý: menuClassName và menuPopupClassName để custom lại các vị trí
 */
function Menu({ children, menuList = [], menuClassName, menuPopupClassName }) {
  // Render menu list
  const renderMenuList = () => {
    return menuList.map((item) => <MenuItem key={item.id} item={item} />);
  };

  // Lưu các class vào biến
  const menuClass = cx('menu', { [menuClassName]: menuClassName });
  const menuPopupClass = cx('menu-popup', { [menuPopupClassName]: menuPopupClassName });

  return (
    <div className={menuClass}>
      {/* Nút khi hover thì hiển thị danh sách */}
      <section className={cx('dropdown-menu')}>{children}</section>

      {/* Danh sách */}
      <section className={menuPopupClass}>
        <WrapperPopper>{renderMenuList()}</WrapperPopper>
      </section>
    </div>
  );
}

export default Menu;
