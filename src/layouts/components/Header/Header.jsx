import { useEffect, useState } from 'react';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { EllipsisVertical, Inbox, Logo, Plus, Send } from '~/assets/images';
import { MENU_ITEMS, USER_MENU_ITEMS } from './constants';

import Button from '~/components/Button';
import { Menu } from '~/components/Popper';
import UserAvatar from '~/components/UserAvatar';
import Tooltip from '~/components/Tooltip';
import Search from './Search';

const cx = classNames.bind(styles);

function Header() {
  const [menuItems, setMenuItems] = useState([]); // State để lưu trữ mảng Menu Item

  let isUserLoggedIn = false; // State để xác định trạng thái đăng nhập của người dùng

  // Sử dụng useEffect để cập nhật menuItems khi trạng thái đăng nhập thay đổi
  useEffect(() => {
    let timer = setTimeout(() => {
      // Gắn mảng Menu Item
      setMenuItems(isUserLoggedIn ? USER_MENU_ITEMS : MENU_ITEMS);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isUserLoggedIn]);

  // Hàm xử lý khi một mục menu được nhấn (parentMenu là cha của item)
  const handleMenuClick = (item, parentMenu) => {
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
        <Logo className={cx('logo')} />

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
          {menuItems.length > 0 && (
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
                  small
                />
              ) : (
                // Menu list
                <div className={cx('menu-toggle')}>
                  <EllipsisVertical className={cx('menu-icon')} />
                </div>
              )}
            </Menu>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
