import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <div>Designed by DK</div>

          <div>made by KatOlista</div>

          <div>2024</div>
        </div>
      </div>
    </footer>
  )
}

