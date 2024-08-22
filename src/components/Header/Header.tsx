import { Button, Navigation } from "../";

import styles from "./Header.module.scss";

export const Header = () => {
  const toggleMenuHandler = () => {
    document.querySelector('#menu')?.classList.toggle('menu-active');
  };

  return (
    <section className="container">
      <div className={styles.header}>
        <div className={styles.header__name}>Ola Katiushyna</div>
        <div className={styles.header__menu}>
          <Button onClick={toggleMenuHandler}>Menu</Button>
          <Navigation />
        </div>
      </div>
    </section>
  );
};
