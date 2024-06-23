import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { MenuItemProps } from '../SidebarTypes';

const cx = classNames.bind(styles);

function MenuItem({ title, iconSolid, iconRegular, to }: MenuItemProps) {
  return (
    <NavLink className={({ isActive }) => cx('menu-item', { active: isActive })} to={to}>
      {({ isActive }) => (
        <>
          <div className={cx('icon')}> {isActive ? iconSolid : iconRegular}</div>

          <span className={cx('title')}> {title} </span>
        </>
      )}
    </NavLink>
  );
}

export default MenuItem;
