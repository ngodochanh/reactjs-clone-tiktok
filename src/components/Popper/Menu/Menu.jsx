import WrapperPopper from '~/components/Popper';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import HeaderMenu from './HeaderMenu';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

/**
 * Component Menu
 *
 * @param {React.ReactNode} children - Nút để hover hiển thị danh sách.
 * @param {Array} menuList - Mảng danh sách menu.
 * @param {string} menuClassName - Tên lớp CSS cho wrapper của menu (nút hover và danh sách).
 * @param {string} menuPopupClassName - Tên lớp CSS cho wrapper của danh sách menu.
 * @param {function} onClick - Hàm xử lý khi một mục menu được nhấn.
 *
 * @note menuClassName và menuPopupClassName để custom lại các vị trí.
 *
 * @returns {JSX.Element} - Component Menu đã render.
 */
function Menu({ children, menuList = [], menuClassName, menuPopupClassName, onClick = () => {} }) {
  // Ref để lưu trữ tham chiếu đến phần tử menu-popup
  const menuPopupRef = useRef();
  // State lưu trữ các trạng thái của menu để điều hướng qua các mục con
  const [menuStack, setMenuStack] = useState([{ data: menuList }]);
  // Menu hiện tại được hiển thị, lấy từ phần tử cuối của menuStack
  const currentMenu = menuStack[menuStack.length - 1];

  // Effect đặt lại menuStack về trạng thái ban đầu khi menuPopup ẩn đi
  useEffect(() => {
    if (menuPopupRef.current) {
      menuPopupRef.current.addEventListener('mouseleave', () => {
        setTimeout(() => {
          setMenuStack([menuStack[0]]);
        }, 700); // Thời gian phù hợp với animation fadeOut trong CSS (class .menu-popup )
      });
    }
  }, [menuStack]);

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
      <div className={cx('dropdown-menu')}>{children}</div>

      {/* Danh sách */}
      <div
        className={menuPopupClass}
        ref={menuPopupRef} // Hiển thị menu khi chuột vào
      >
        <WrapperPopper>
          {/* Header menu */}
          {currentMenu?.label && <HeaderMenu label={currentMenu?.label} onBack={handleBackClick} />}
          {/* Menu list */}
          {renderMenuList()}
        </WrapperPopper>
      </div>
    </div>
  );
}

export default Menu;
