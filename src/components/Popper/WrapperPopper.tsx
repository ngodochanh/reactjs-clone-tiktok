import styles from './Popper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type WrapperPopperProps = {
  children: React.ReactNode, // Nội dung hoặc các thành phần con của WrapperPopper
  noPaddingBottom?: boolean, // Có sử dụng padding bottom hay không
};

function WrapperPopper({ children, noPaddingBottom = false }: WrapperPopperProps) {
  const classes = cx('wrapper', { noPaddingBottom });

  return <div className={classes}>{children}</div>;
}

export default WrapperPopper;
