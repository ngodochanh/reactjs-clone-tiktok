import Navigation from './Navigation';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { FOOTER_MENU, NAVIGATION } from './constants';
import Button from '~/components/Button';
import FooterMenu from './FooterMenu';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      {/* Navigation */}
      <nav className={cx('navigation')}>
        <Navigation menuList={NAVIGATION} />
      </nav>

      {/* Login */}
      <div className={cx('login', 'separator')}>
        <p className={cx('prompt')}>Log in to follow creators, like videos, and view comments.</p>
        <Button large outline>
          Log in
        </Button>
      </div>

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
