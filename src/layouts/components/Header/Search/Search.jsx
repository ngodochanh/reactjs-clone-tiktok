import { useEffect, useRef, useState } from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { WrapperPopper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { Close, Find, Spinner } from '~/assets/icons';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
  const [isSearching, setIsSearching] = useState(false); // Trạng thái tìm kiếm
  const [results, setResults] = useState([]); // Kết quả tìm kiếm
  const [query, setQuery] = useState(''); // Nội dung tìm kiếm

  const searchRef = useRef(); // Tham chiếu đến input tìm kiếm.
  const debouncedQuery = useDebounce(query, 700); // Sử dụng hook debounce để trì hoãn việc gửi query

  useEffect(() => {
    // Xử lý cho lần đầu component mounted không bị truy vấn
    if (debouncedQuery.trim() === '') {
      setResults([]); // Xử lý khi truy vấn xong thì xóa hết ký tự vẫn ra kết quả tìm kiếm
      setIsSearching(false);
      return;
    }

    fetchSearchResults();
  }, [debouncedQuery]);

  // Hàm gửi yêu cầu tìm kiếm
  const fetchSearchResults = async () => {
    setIsSearching(true);
    try {
      const result = await searchServices.searchUser(debouncedQuery);

      setResults(result);
    } catch (error) {
      setIsSearching(false); // Trường hợp bị lỗi cũng gọi để cho biết kết thúc tìm kiếm
    }

    setIsSearching(false);
  };

  // Xử lý khi nội dung tìm kiếm thay đổi
  const handleSearchChange = (e) => {
    // Không cho phép ký tự trắng đầu tiên
    const value = e.target.value.trimStart();
    setQuery(value);
  };

  // Xử lý xóa nội dung tìm kiếm
  const handleClearSearch = () => {
    setQuery('');
    setResults([]);
    searchRef.current.focus();
  };

  // Xử lý khi người dùng gửi biểu mẫu tìm kiếm
  const handleSubmitSearch = (e) => {
    e.preventDefault();

    // fetchSearchResults();
  };

  return (
    <>
      {/* Search form */}
      <form className={cx('search-form')} onSubmit={handleSubmitSearch}>
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search"
          className={cx('search-input')}
          ref={searchRef}
          value={query}
          onChange={handleSearchChange}
        />

        {/* Nút xóa nội dung Search (hiển thị khi có nội dung Search) và loading nối dụng Search */}
        {query && (
          <div className={cx('search-status')} onClick={handleClearSearch}>
            {isSearching ? (
              <Spinner className={cx('search-icon', 'search-icon-spinner')} />
            ) : (
              <Close className={cx('search-icon')} />
            )}
          </div>
        )}

        {/* Search Button */}
        <button className={cx('search-btn')} type="submit">
          <Find />
        </button>
      </form>

      {/* Search result */}
      {results?.length > 0 && (
        <div className={cx('search-result')}>
          <WrapperPopper noPaddingBottom>
            <h4 className={cx('search-title')}>Accounts</h4>
            {results.map((item) => (
              <AccountItem
                key={item.id}
                avatarImage={item.avatar}
                username={item.full_name}
                nickname={item.nickname}
                verified={item.tick}
              />
            ))}

            {query && <div className={cx('view-all-results')}>View all results for "{query}"</div>}
          </WrapperPopper>
        </div>
      )}
    </>
  );
}

export default Search;
