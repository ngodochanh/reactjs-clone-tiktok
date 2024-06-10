import { useState } from 'react';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';

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
        <img src={images.logo.url} alt={images.logo.alt} />

        {/* Search */}
        <div className={cx('search')}>
          {/* Search form */}
          <form className={cx('search-form')} onSubmit={handleSubmitSearch}>
            {/* Search Input */}
            <input
              type="text"
              placeholder="Tìm kiếm"
              className={cx('search-input')}
              value={search}
              onChange={handleSearchChange}
            />

            {/* Nút xóa nội dung Search (hiển thị khi có nội dung Search) */}
            {search && (
              <div className={cx('search-status')} onClick={handleClearSearch}>
                <img src={images.close.url} alt={images.close.alt} />
              </div>
            )}

            {/* Search Button */}
            <button className={cx('search-btn')} type="submit">
              <svg width="24" data-e2e="" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
                ></path>
              </svg>
            </button>
          </form>

          {/* Search result */}
          <div className={cx('search-result')}>
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
          </div>
        </div>

        {/* Action */}
        <div style={{ width: 278, height: '100%', backgroundColor: '#ccc' }}></div>
      </div>
    </header>
  );
}

export default Header;
