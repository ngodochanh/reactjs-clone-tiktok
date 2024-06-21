import { useEffect, useState } from 'react';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { EllipsisVertical, Inbox, Logo, Plus, Send } from '~/assets/icons';
import Button from '~/components/Button';
import { Menu } from '~/components/Popper';
import UserAvatar from '~/components/UserAvatar';
import Tooltip from '~/components/Tooltip';

import { MENU_ITEMS, USER_MENU_ITEMS } from './constants';
import Search from './Search';
import config from '~/config';

interface MenuItemType {
  id: string;
  icon?: React.ReactNode; // Sử dụng ReactNode cho icon để có thể truyền component hoặc các phần tử React khác
  title: string;
  to?: string;
  children?: {
    label: string;
    compact?: boolean; // đây là custom style lại cho btn nhỏ gọn hơn
    data: MenuItemType[]; // có thẻ có kiểu dữ liệu khác
  };
  component?: JSX.Element | undefined; // Cho phép truyền component cho mục menu
  separator?: boolean; // đường phân cách giữa các mục trong Menu
  type?: string;
  code?: string;
}

interface MenuStack {
  data: MenuItemType[];
}

const cx = classNames.bind(styles);

function Header() {
  // State để lưu trữ mảng Menu Item
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  // State để xác định trạng thái đăng nhập của người dùng
  let isUserLoggedIn = true;

  // Sử dụng useEffect để cập nhật menuItems khi trạng thái đăng nhập thay đổi
  useEffect(() => {
    let timer = setTimeout(() => {
      // Gắn mảng Menu Item
      setMenuItems(isUserLoggedIn ? USER_MENU_ITEMS : MENU_ITEMS);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isUserLoggedIn]);

  // Hàm xử lý khi một mục menu được nhấn (parentMenu là cha của item)
  const handleMenuClick = (item: MenuItemType, parentMenu: MenuStack) => {
    switch (item.type) {
      case 'languages': // Xử lý thay đổi ngôn ngữ
        parentMenu.data.splice(parentMenu.data.indexOf(item), 1);
        parentMenu.data.unshift(item);

        setMenuItems([...menuItems]);
        break;
      default:
      // Xử lý các loại khác
    }
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        <Link to={config.routes.home} className={cx('logo')}>
          <Logo />
        </Link>

        {/* Search */}
        <div className={cx('search')}>
          <Search />
        </div>

        {/* Action */}
        <div className={cx('action')}>
          {isUserLoggedIn ? (
            <>
              {/* Btn upload */}
              <Button leftIcon={<Plus />} className={cx('btn-upload')}>
                Upload
              </Button>

              {/* Icon */}
              <Tooltip text="Messages" bottom className={cx('tooltip-spacing')}>
                <Send />
              </Tooltip>

              <div className={cx('inbox-container')}>
                <Tooltip text="Inbox" bottom className={cx('tooltip-spacing', 'inbox-icon')}>
                  <Inbox />
                </Tooltip>

                <p className={cx('inbox-count')}>26</p>
              </div>
            </>
          ) : (
            // Btn login
            <Button primary>Log in</Button>
          )}

          {/* Kebab menu */}
          <Menu
            menuList={menuItems}
            menuClassName={cx('kebab-menu')}
            menuPopupClassName={cx('menu-popup', isUserLoggedIn && 'logged-in')}
            onClick={handleMenuClick}
          >
            {isUserLoggedIn ? (
              // Avatar
              <UserAvatar
                avatarImage="https://i.pinimg.com/564x/54/47/e7/5447e7457f0d71b51408b13a1ecdb76d.jpg"
                avatarAlt="avatar"
                small
              />
            ) : (
              // Menu list
              <div className={cx('menu-toggle')}>
                <EllipsisVertical className={cx('menu-icon')} />
              </div>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
