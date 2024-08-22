import styles from './Menu.module.scss';

import WhiteArrow from "../../assets/icons/white-arrow.svg?react";
import { menuList } from "../../utils/constants";

export const Menu = () => {
  return (
    <ul className={styles.menu}>
      {menuList.map((menuItem: string) => (
        <li key={menuItem}>
          <a className={styles.menu__link} href="">
            {menuItem} <WhiteArrow />
          </a>
        </li>
      ))}
    </ul>
  );
};
