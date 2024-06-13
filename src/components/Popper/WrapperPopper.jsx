import styles from './Popper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function WrapperPopper({ children, noPaddingBottom = false }) {
  const classes = cx('wrapper', { noPaddingBottom });

  return <div className={classes}>{children}</div>;
}

export default WrapperPopper;
