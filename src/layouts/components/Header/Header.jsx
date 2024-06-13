import { useState } from 'react';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Close, EllipsisVertical, Find, Logo } from '~/assets/images';
import { MENU_ITEM } from './constants';

import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { Menu, WrapperPopper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Header() {
  // State để lưu trữ nội dung Search
  const [search, setSearch] = useState('');

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
        <Logo />

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
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
              {search && <div className={cx('view-all-results')}>View all results for "{search}"</div>}
            </WrapperPopper>
          </div>
        </div>

        {/* Action */}
        <div className={cx('action')}>
          <Button primary>Log in</Button>

          {/* Kebab menu */}
          <Menu menuList={MENU_ITEM} menuClassName={cx('kebab-menu')} menuPopupClassName={cx('menu-popup')}>
            <div className={cx('menu-icon')}>
              <EllipsisVertical />
            </div>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
