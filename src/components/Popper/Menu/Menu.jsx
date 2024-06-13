import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import MenuItem from './MenuItem';
import WrapperPopper from '~/components/Popper';

const cx = classNames.bind(styles);

function Menu({ children, items = [], right = false, marginTop = '8px' }) {
  const renderItems = () => {
    return items.map((item) => <MenuItem key={item.id} item={item} />);
  };

  const classes = cx('menu-popup', {
    right,
  });

  return (
    <div className={cx('menu')}>
      <section className={cx('dropdown-menu')}>{children}</section>

      {/* Menu pop-up */}
      <section className={classes} style={{ marginTop: marginTop }}>
        <WrapperPopper>{renderItems()}</WrapperPopper>
      </section>
    </div>
  );
}

export default Menu;
