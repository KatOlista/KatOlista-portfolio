import gsap from 'gsap';
import cn from 'classnames';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';

import { Button, Menu, Navigation } from '../';

import styles from './Header.module.scss';

import BurgerMenuIcon from '../../assets/icons/burger-menu.svg?react';
import CloseIcon from '../../assets/icons/close.svg?react';

export const Header = () => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.timeline().from(`.${styles.header}`, {
      opacity: 0,
      y: '-150%',
      delay: 0.5,
      duration: 1,
    });
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
  ) => {
    e?.stopPropagation();

    const menu = document.querySelector('#menu');

    if (menu?.classList.contains('menu-active')) {
      menu?.classList.remove('menu-active');

      document.body.classList.remove('noscroll');

      setTimeout(() => {
        setIsMenuOpen((open) => !open);
      }, 200);
    } else {
      setIsMenuOpen((open) => !open);
      document.body.classList.add('noscroll');

      setTimeout(() => {
        document.querySelector('#menu')?.classList.add('menu-active');
      }, 101);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <a id="name" href="./" className={styles.header__name}>
          KatOlista
        </a>

        <div className={styles.header__menu}>
          <Button
            buttonClassName={styles.header__button}
            label="show-hide menu"
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
      </header>

      {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
    </>
  );
};
