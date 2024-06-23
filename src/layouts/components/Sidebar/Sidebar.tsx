import Menu from './Menu';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { NAVIGATION } from './constants';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <nav>
        <Menu menuList={NAVIGATION} />
      </nav>
    </aside>
  );
}

export default Sidebar;
