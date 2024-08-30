import styles from "./Menu.module.scss";

import Arrow from "../../assets/icons/arrow.svg?react";
import { menuList } from "../../utils/constants";

export const Menu = () => {
  return (
    <ul id="menu" className={styles.menu}>
      {menuList.map((menuItem: string) => (
        <li className={styles.menu__li} key={menuItem}>
          <a className={styles.menu__link} href={`#${menuItem}`}>
            {menuItem} <Arrow />
          </a>
        </li>
      ))}
    </ul>
  );
};
