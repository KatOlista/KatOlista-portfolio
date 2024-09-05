import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <div>Designed by DK</div>

          <div>@KatOlista 2024</div>
        </div>
      </div>
    </footer>
  );
};
