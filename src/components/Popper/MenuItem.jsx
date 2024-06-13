import Button from '~/components/Button';
import styles from './Popper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuItem({ item }) {
  return (
    <Button leftIcon={item.icon} to={item.to} text className={cx('menu-item')}>
      {item.title}
    </Button>
  );
}

export default MenuItem;
