import images from '~/assets/images';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <article className={cx('wrapper')}>
      <figure className={cx('avatar')}>
        <img src="https://i.pinimg.com/564x/54/47/e7/5447e7457f0d71b51408b13a1ecdb76d.jpg" alt="a" />
      </figure>

      <section className={cx('info')}>
        <div className={cx('username')}>
          <h5>hamburger_food</h5>

          <img src={images.verified.url} alt={images.verified.alt} />
        </div>
        <p className={cx('nickname')}>hamburger</p>
      </section>
    </article>
  );
}

export default AccountItem;
