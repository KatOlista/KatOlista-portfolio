import styles from "./Navigation.module.scss";

import { menuList } from "../../utils/constants";

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        {menuList.map((menuItem: string) => (
          <li key={menuItem}>
            <a className={styles.navigation__link} href="">
              {menuItem}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
