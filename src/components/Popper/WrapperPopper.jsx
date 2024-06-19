import styles from './Popper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * Component WrapperPopper
 *
 * @param {React.ReactNode} children - Nội dung hoặc các thành phần con của WrapperPopper.
 * @param {boolean} noPaddingBottom - Có sử dụng padding bottom hay không.
 *
 * @returns {JSX.Element} - Component WrapperPopper đã render.
 */
function WrapperPopper({ children, noPaddingBottom = false }) {
  const classes = cx('wrapper', { noPaddingBottom });

  return <div className={classes}>{children}</div>;
}

export default WrapperPopper;
