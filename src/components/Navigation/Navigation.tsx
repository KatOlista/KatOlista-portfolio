import { Button } from '../';

import styles from './Navigation.module.scss';

import { menuList } from '../../utils';

export const Navigation = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView(true);
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        {menuList.map((menuItem: string) => (
          <li
            key={menuItem}
            className={styles.navigation__li}
            onClick={() => scrollTo(`#${menuItem}`)}
          >
            <Button
              buttonClassName={styles.navigation__button}
              label={menuItem}
            >
              {menuItem}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
