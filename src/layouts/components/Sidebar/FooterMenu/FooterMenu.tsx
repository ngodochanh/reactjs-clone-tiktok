import { Link } from 'react-router-dom';
import styles from './FooterMenu.module.scss';
import classNames from 'classnames/bind';
import { FooterMenuType } from '../SidebarTypes';
import { useState } from 'react';
import { ArrowDown } from '~/assets/icons';

const cx = classNames.bind(styles);

type FooterMenuProps = {
  listMenu: FooterMenuType[];
};

function FooterMenu({ listMenu }: FooterMenuProps) {
  const [show, setShow] = useState<{ [key: string]: boolean }>(
    listMenu.reduce((acc, item) => ({ ...acc, [item.id]: item.seeMore || false }), {}),
  );

  const handleToggle = (id: string) => {
    setShow((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <>
      {listMenu.map((itemMenu) =>
        show[itemMenu.id] ? (
          <p key={itemMenu.id} className={cx('footer-see-more')} onClick={() => handleToggle(itemMenu.id)}>
            See more
            <ArrowDown />
          </p>
        ) : (
          <section key={itemMenu.id} className={cx('list')}>
            <h5 className={cx('title')}>{itemMenu.title}</h5>

            {itemMenu.list.map((item) => (
              <Link key={item.id} className={cx('link')} to={item.to}>
                {item.label}
              </Link>
            ))}
          </section>
        ),
      )}
    </>
  );
}

export default FooterMenu;
