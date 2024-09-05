import styles from './Navigation.module.scss';

import { menuList } from '../../utils';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        {menuList.map((menuItem: string) => (
          <li className={styles.navigation__li} key={menuItem}>
            <a className={styles.navigation__link} href={`#${menuItem}`}>
              {menuItem}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
