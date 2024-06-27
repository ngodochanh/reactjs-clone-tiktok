import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import classNames from 'classnames/bind';
import { NavigationType } from '../SidebarTypes';

const cx = classNames.bind(styles);

type NavigationProps = {
  menuList: NavigationType[];
  isUserLoggedIn: boolean; // Xem người dùng login chưa
};

function Navigation({ menuList, isUserLoggedIn }: NavigationProps) {
  return (
    <>
      {menuList.map((item) => {
        // Nếu người dùng chưa login thì sẽ không chuyển qua trang và khi nhấn vào thì hiển thị modal
        if (item.isLoggedIn && !isUserLoggedIn) {
          return (
            <div key={item.id} className={cx('nav-item')}>
              <div className={cx('icon')}>{item.iconRegular}</div>
              <span className={cx('title')}> {item.title} </span>
            </div>
          );
        }

        return (
          <NavLink key={item.id} className={({ isActive }) => cx('nav-item', { active: isActive })} to={item.to}>
            {({ isActive }) => (
              <>
                <div className={cx('icon')}>{isActive ? item.iconSolid : item.iconRegular}</div>
                <span className={cx('title')}>{item.title}</span>
              </>
            )}
          </NavLink>
        );
      })}
    </>
  );
}

export default Navigation;
