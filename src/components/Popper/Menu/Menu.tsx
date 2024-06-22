import WrapperPopper from '~/components/Popper';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import HeaderMenu from './HeaderMenu';
import MenuItem from './MenuItem';
import { MenuItemChildrenType, MenuItemType } from '~/types/Menu';

const cx = classNames.bind(styles);

type MenuProps = {
  children: React.ReactNode; //Nút để hover hiển thị danh sách
  menuList: any; // Mảng danh sách menu
  menuClassName?: string; // Tên lớp CSS cho wrapper của menu (nút hover và danh sách)
  menuPopupClassName?: string; // Tên lớp CSS cho wrapper của danh sách menu
  onClick?: (item: MenuItemType, currentMenu: MenuItemChildrenType) => void; // Hàm xử lý khi một mục menu được nhấn
};

function Menu({ children, menuList = [], menuClassName, menuPopupClassName, onClick = () => {} }: MenuProps) {
  // State lưu trữ tạng thái hiện hoặc ẩn .menu-popup để xử lý có hiệu ứng (bởi vì css display: block mất hiệu ứng)
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // Ref để lưu trữ tham chiếu đến phần tử menu-popup
  const menuPopupRef = useRef<HTMLDivElement>(null);
  // State lưu trữ các trạng thái của menu để điều hướng qua các mục con
  const [menuStack, setMenuStack] = useState<MenuItemChildrenType[]>([{ data: menuList }]);
  // Menu hiện tại được hiển thị, lấy từ phần tử cuối của menuStack
  const currentMenu: MenuItemChildrenType = menuStack[menuStack.length - 1];

  // Effect cập nhật khi menuList truyền từ ngoài thay đổi
  useEffect(() => {
    setMenuStack([{ data: menuList }]);
  }, [menuList]);

  // Effect đặt lại menuStack về trạng thái ban đầu khi menuPopup ẩn đi
  useEffect(() => {
    if (menuPopupRef.current) {
      menuPopupRef.current.addEventListener('mouseleave', () => {
        setTimeout(() => {
          setMenuStack([menuStack[0]]);
          setIsVisible(false); // Không hover vào ẩn menu-popup
        }, 700); // Thời gian phù hợp với animation fadeOut trong CSS (class .menu-popup )
      });
    }
  }, [menuStack]);

  // Xử lý khi một mục menu được nhấn
  const handleItemClick = (item: MenuItemType) => {
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
    return currentMenu.data.map((item: MenuItemType) => {
      let compact = currentMenu.compact; // Hiển thị các mục menu theo kiểu nhỏ gọn.

      return <MenuItem key={item.id} item={item} compact={compact} onClick={() => handleItemClick(item)} />;
    });
  };

  // Lưu các class vào biến
  const menuClass = cx('menu', { [menuClassName as string]: menuClassName });
  const menuPopupClass = cx('menu-popup', { [menuPopupClassName as string]: menuPopupClassName });

  return (
    <div className={menuClass}>
      {/* Nút khi hover thì hiển thị danh sách */}
      <div
        className={cx('dropdown-menu')}
        onMouseEnter={() => setIsVisible(true)} // Khi hover vào thì hiển thị menu-popup
      >
        {children}
      </div>

      {/* Danh sách */}
      {isVisible && (
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
      )}
    </div>
  );
}

export default Menu;
