import Navigation from './Navigation';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { FOOTER_MENU, NAVIGATION } from './constants';
import Button from '~/components/Button';
import FooterMenu from './FooterMenu';
import { Link } from 'react-router-dom';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function Sidebar() {
  let isUserLoggedIn = false;

  return (
    <aside className={cx('wrapper')}>
      {/* Navigation */}
      <nav className={cx('navigation')}>
        <Navigation menuList={NAVIGATION} isUserLoggedIn={isUserLoggedIn} />
      </nav>

      {isUserLoggedIn ? (
        // Following accounts
        <div className={cx('following', 'separator')}>
          <h5 className={cx('title')}>Following accounts</h5>

          <AccountItem
            avatarImage="https://i.pinimg.com/564x/54/47/e7/5447e7457f0d71b51408b13a1ecdb76d.jpg"
            avatarAlt="avatar"
            username="Ngộ Độc Hành"
            nickname="ngodochanh"
          />

          <AccountItem
            avatarImage="https://i.pinimg.com/564x/54/47/e7/5447e7457f0d71b51408b13a1ecdb76d.jpg"
            avatarAlt="avatar"
            username="Ngộ Độc Hành"
            nickname="ngodochanh"
          />

          <AccountItem
            avatarImage="https://i.pinimg.com/564x/54/47/e7/5447e7457f0d71b51408b13a1ecdb76d.jpg"
            avatarAlt="avatar"
            username="Ngộ Độc Hành"
            nickname="ngodochanh"
          />

          <AccountItem
            avatarImage="https://i.pinimg.com/564x/54/47/e7/5447e7457f0d71b51408b13a1ecdb76d.jpg"
            avatarAlt="avatar"
            username="Ngộ Độc Hành"
            nickname="ngodochanh"
          />

          <AccountItem
            avatarImage="https://i.pinimg.com/564x/54/47/e7/5447e7457f0d71b51408b13a1ecdb76d.jpg"
            avatarAlt="avatar"
            username="Ngộ Độc Hành"
            nickname="ngodochanh"
          />

          <p className={cx('following-see-more')}>See more</p>
        </div>
      ) : (
        // Login
        <div className={cx('login', 'separator')}>
          <p className={cx('prompt')}>Log in to follow creators, like videos, and view comments.</p>
          <Button large outline>
            Log in
          </Button>
        </div>
      )}

      {/* Effects */}
      <div className={cx('effects', 'separator')}>
        <Link className={cx('link')} to="/">
          <p className={cx('caption')}>Create TikTok effects, get a reward</p>
        </Link>
      </div>

      {/* Footer */}
      <footer className={cx('footer')}>
        {/* Footer Menu */}
        <FooterMenu listMenu={FOOTER_MENU} />

        <p className={cx('copyright')}>© 2024 TikTok</p>
      </footer>
    </aside>
  );
}

export default Sidebar;
