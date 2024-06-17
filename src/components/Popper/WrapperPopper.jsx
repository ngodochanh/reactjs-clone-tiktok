import styles from './Popper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * Component WrapperPopper
 *
 * Props:
 * - children: Wrapper menu popup
 * - noPaddingBottom: Có padding bottom không
 *
 * Lưu ý: menuClassName và menuPopupClassName để custom lại các vị trí
 */
function WrapperPopper({ children, noPaddingBottom = false }) {
  const classes = cx('wrapper', { noPaddingBottom });

  return <div className={classes}>{children}</div>;
}

export default WrapperPopper;
