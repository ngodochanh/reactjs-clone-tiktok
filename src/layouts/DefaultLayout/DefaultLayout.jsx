import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      {/* Header của trang */}
      <Header />
      <div className={cx('container')}>
        {/* Sidebar điều hướng */}
        <Sidebar />
        {/* Nội dung chính của trang */}
        <main className="content">{children}</main>
      </div>
    </div>
  );
}

export default DefaultLayout;
