import WrapperPopper from '~/components/Popper';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import HeaderMenu from './HeaderMenu';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

/**
 * children: Nút để hover hiển thị danh sách
 * menuList: Mảng danh sách menu
 * menuClassName: class thẻ wrapper (nút hover và danh sách)
 * menuPopupClassName: class thẻ danh sách
 * onClick: Hàm xử lý khi một mục menu được nhấn
 *
 * Lưu ý: menuClassName và menuPopupClassName để custom lại các vị trí
 */
function Menu({ children, menuList = [], menuClassName, menuPopupClassName, onClick = () => {} }) {
  // State lưu trữ các trạng thái của menu để điều hướng qua các mục con
  const [menuStack, setMenuStack] = useState([{ data: menuList }]);
  // Menu hiện tại được hiển thị, lấy từ phần tử cuối của menuStack
  const currentMenu = menuStack[menuStack.length - 1];

  // Xử lý khi một mục menu được nhấn
  const handleItemClick = (item) => {
    if (item.children) {
      // Nếu mục có con, thêm nó vào menuStack
      setMenuStack([...menuStack, item.children]);
    } else {
      // Nếu không, gọi onClick để xử lý
      onClick(item, currentMenu); // Truyền currentMenu vào để xử lý trong onClick
    }
  };

  // Xử lý khi nhấn nút quay lại, loại bỏ phần tử cuối cùng trong menuStack
  const handleBackClick = () => {
    setMenuStack(menuStack.slice(0, -1));
  };

  // Render danh sách menu
  const renderMenuList = () => {
    return currentMenu.data.map((item) => {
      let compact = currentMenu.compact; // Hiển thị các mục menu theo kiểu nhỏ gọn.

      return <MenuItem key={item.id} item={item} compact={compact} onClick={() => handleItemClick(item)} />;
    });
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
        <WrapperPopper>
          {/* Header menu */}
          {currentMenu?.label && <HeaderMenu label={currentMenu?.label} onBack={handleBackClick} />}
          {/* Menu list */}
          {renderMenuList()}
        </WrapperPopper>
      </section>
    </div>
  );
}

export default Menu;
