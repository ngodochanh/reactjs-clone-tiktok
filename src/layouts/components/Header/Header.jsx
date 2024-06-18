import { useEffect, useState } from 'react';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Close, EllipsisVertical, Find, Inbox, Logo, Plus, Send } from '~/assets/images';
import { MENU_ITEMS, USER_MENU_ITEMS } from './constants';

import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { Menu, WrapperPopper } from '~/components/Popper';
import UserAvatar from '~/components/UserAvatar';
import Tooltip from '~/components/Tooltip';

const cx = classNames.bind(styles);

function Header() {
  // State để lưu trữ nội dung Search
  const [search, setSearch] = useState('');
  // State để lưu trữ mảng Menu Item
  const [menuItems, setMenuItems] = useState([]);

  let isUserLoggedIn = false;

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

  // Hàm xử lý khi nội dung Search thay đổi
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Hàm xử lý khi người dùng nhấn nút xóa nội dung Search
  const handleClearSearch = () => {
    setSearch('');
  };

  // Hàm xử lý khi người dùng gửi biểu mẫu Search
  const handleSubmitSearch = (e) => {
    e.preventDefault();
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        <Logo className={cx('logo')} />

        {/* Search */}
        <div className={cx('search')}>
          {/* Search form */}
          <form className={cx('search-form')} onSubmit={handleSubmitSearch}>
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search"
              className={cx('search-input')}
              value={search}
              onChange={handleSearchChange}
            />

            {/* Nút xóa nội dung Search (hiển thị khi có nội dung Search) */}
            {search && (
              <div className={cx('search-status')} onClick={handleClearSearch}>
                <Close />
              </div>
            )}

            {/* Search Button */}
            <button className={cx('search-btn')} type="submit">
              <Find />
            </button>
          </form>

          {/* Search result */}
          <div className={cx('search-result')}>
            <WrapperPopper noPaddingBottom>
              <h4 className={cx('search-title')}>Accounts</h4>
              <AccountItem
                avatarImage="https://i.pinimg.com/564x/54/47/e7/547e7457f0d71b51408b13a1ecdb76d.jpg"
                fallBack="https://i.pinimg.com/564x/4d/22/9f/4d229f0d14869d3e955bf973042aff59.jpg"
                verified
              />
              <AccountItem avatarImage="https://i.pinimg.com/564x/54/47/e7/5447e7457f0d71b51408b13a1ecdb7d.jpg" />
              <AccountItem avatarImage="https://i.pinimg.com/564x/54/47/e7/5447e7457f0d71b51408b13a1ecdb76d.jpg" />
              <AccountItem avatarImage="https://i.pinimg.com/564x/54/47/e7/5447e7457f0d71b51408b13a1ecdb76d.jpg" />
              <AccountItem
                avatarImage="https://i.pinimg.com/564x/54/47/e7/5447e7457f0d71b51408b13a1ecdb76d.jpg"
                fallBack="https://i.pinimg.com/564x/4d/22/9f/4d229f0d14869d3e955bf973042aff59.jpg"
              />
              <AccountItem
                avatarImage="https://i.pinimg.com/564x/54/47/e7/5447e7457f0d71b51408b13a1ecdb76d.jpg"
                verified
              />
              <AccountItem avatarImage="https://i.pinimg.com/564x/54/47/e7/5447e7457f0d71b51408b13a1ecdb76d.jpg" />
              <AccountItem
                avatarImage="https://i.pinimg.com/564x/54/47/e75447e7457f0d71b51408b13a1ecdb76d.jpg"
                verified
              />
              <AccountItem
                avatarImage="https://i.pinimg.com/564x/54/47/e7/5447e7457f0d71b51408b13a1ecdb76d.jpg"
                verified
              />
              <AccountItem
                avatarImage="https://i.pinimg.com/564x/54/47/e7/5447e7457f0d71b51408b13a1ecdb76d.jpg"
                verified
              />
              <AccountItem avatarImage="https://i.pinimg.com/564x/54/47/e7/5447e7457f0d71b51408b13a1ecdb76d.jpg" />
              <AccountItem avatarImage="https://i.pinimg.com/564x/54/47/e7/5447e7457f0d71b51408b13a1ecdb76d.jpg" />
              {search && <div className={cx('view-all-results')}>View all results for "{search}"</div>}
            </WrapperPopper>
          </div>
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
