import { NavigationType } from '../SidebarTypes';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type NavigationProps = {
  menuList: NavigationType[];
};

function Navigation({ menuList }: NavigationProps) {
  return (
    <>
      {menuList.map((item) => (
        <NavLink key={item.id} className={({ isActive }) => cx('nav-item', { active: isActive })} to={item.to}>
          {({ isActive }) => (
            <>
              <div className={cx('icon')}> {isActive ? item.iconSolid : item.iconRegular}</div>

              <span className={cx('title')}> {item.title} </span>
            </>
          )}
        </NavLink>
      ))}
    </>
  );
}

export default Navigation;
