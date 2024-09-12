import React, { useRef } from 'react';

import { menuList } from '../../utils';
import { useClickOutside } from '../../hooks/useClickOutside';

import styles from './Menu.module.scss';

import Arrow from '../../assets/icons/arrow.svg?react';

type Props = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Menu: React.FC<Props> = ({ setIsMenuOpen }) => {
  const closeMenuHandler = () => {
    document.querySelector('#menu')?.classList.remove('menu-active');
    document.body.classList.remove('noscroll');

    setTimeout(() => {
      setIsMenuOpen(false);
    }, 200);
  };

  const menuRef = useRef(null);

  useClickOutside(menuRef, closeMenuHandler);

  return (
    <aside id="menu" className={styles.menu__wrapper}>
      <ul ref={menuRef} className={styles.menu}>
        {menuList.map((menuItem: string) => (
          <li className={styles.menu__li} key={menuItem}>
            <a
              onClick={closeMenuHandler}
              className={styles.menu__link}
              href={`#${menuItem}`}
            >
              {menuItem} <Arrow />
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.menu__layout}></div>
    </aside>
  );
};
