import { useState } from 'react';
import cn from 'classnames';

import { Button, Menu, Navigation } from '../';

import styles from './Header.module.scss';

import BurgerMenuIcon from '../../assets/icons/burger-menu.svg?react';
import CloseIcon from '../../assets/icons/close.svg?react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
  ) => {
    e?.stopPropagation();

    const menu = document.querySelector('#menu');

    if (menu?.classList.contains('menu-active')) {
      menu?.classList.remove('menu-active');

      setTimeout(() => {
        setIsMenuOpen((open) => !open);
      }, 200);
    } else {
      setIsMenuOpen((open) => !open);

      setTimeout(() => {
        document.querySelector('#menu')?.classList.add('menu-active');
      }, 101);
    }
  };

  return (
    <section className="container">
      <div className={styles.header}>
        <a id="name" href="./" className={styles.header__name}>
          KatOlista
        </a>

        <div className={styles.header__menu}>
          <Button
            buttonClassName={styles.header__button}
            onClick={toggleMenuHandler}
          >
            <BurgerMenuIcon
              className={cn(styles.header__icon, {
                [styles.header__show]: !isMenuOpen,
              })}
            />

            <CloseIcon
              className={cn(styles.header__icon, {
                [styles.header__show]: isMenuOpen,
              })}
            />
          </Button>

          <Navigation />
        </div>
      </div>

      {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
    </section>
  );
};
