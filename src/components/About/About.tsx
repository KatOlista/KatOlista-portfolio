import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

import styles from './About.module.scss';

import pixeledPhoto from '../../assets/images/pixeled.webp';
import { Button, Title } from '../';

export const About = () => {
  const removeEffects = () => {
    const hello = document.getElementById('hello');
    const footer = document.getElementById('footer');
    const contacts = document.getElementById('Contacts');

    [hello, footer, contacts].forEach((element) => {
      element?.classList.add(`${styles['about__remove-effects']}`);
    });

    document
      .getElementById('name')
      ?.classList.add(`${styles['about__remove-background']}`);
  };

  const returnEffects = () => {
    const hello = document.getElementById('hello');
    const footer = document.getElementById('footer');
    const contacts = document.getElementById('Contacts');

    [hello, footer, contacts].forEach((element) => {
      element?.classList.remove(`${styles['about__remove-effects']}`);
    });

    document
      .getElementById('name')
      ?.classList.remove(`${styles['about__remove-background']}`);
  };

  const handleExportPageAsImg = () => {
    const capturedElement = document.getElementById('root') as HTMLElement;
    removeEffects();

    html2canvas(capturedElement)?.then((canvas) => {
      const fileName = 'Katiushyna_portfolio_page.png';
      const href = canvas.toDataURL('image/png');
      const element = document.createElement('a');
      element.href = href;
      element.download = fileName;
      document.body.appendChild(element);
      element.click();

      document.body.removeChild(element);
      returnEffects();
    });
  };

  const handleExportPageAsPDF = () => {
    const capturedElement = document.getElementById('root') as HTMLElement;
    removeEffects();
    const elementWidth = capturedElement.clientWidth;
    const elementHeight = capturedElement.clientHeight;
    const margin = 0;

    html2canvas(capturedElement)?.then((canvas) => {
      const fileName = 'Katiushyna_portfolio_page.pdf';
      const href = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'pt', [elementWidth, elementHeight]);
      pdf.addImage(href, 'PNG', margin, margin, elementWidth, elementHeight);
      pdf.save(fileName);
      returnEffects();
    });
  };

  return (
    <section id="About" className={styles.about}>
      <div className="container">
        <Title content="About" />

        <div className={styles.about__content}>
          <div className={styles.about__photo}>
            <img
              className={styles.about__img}
              src={pixeledPhoto}
              alt="my photo"
            />
          </div>

          <div className={styles.about__info}>
            <p className={styles.about__text}>
              I’m a passionate Poland-based FrontEnd Developer with a master’s
              degree from a technical university.
            </p>

            <p className={styles.about__text}>
              I proficient in JavaScript, TypeScript, HTML5, CSS3, and SASS. I
              ensure clean, maintainable code throughout all projects. I possess
              a deep understanding of the React.
            </p>

            <p className={styles.about__text}>
              I have experience in teamwork. I’m confident that my skills and
              background can greatly contribute to your team’s success!
            </p>

            <div className={styles.about__buttons}>
              <a
                className={styles.about__link}
                target="_blank"
                href="https://drive.google.com/file/d/14ji_zVtYhmmd6OvtgE7t5IKpfpAHfu0M/view?usp=sharing"
              >
                <span className={styles.about__cv}>view resume</span>
              </a>

              <Button onClick={handleExportPageAsImg}>
                <span className={styles.about__cv}>Download page as png</span>
              </Button>

              <Button onClick={handleExportPageAsPDF}>
                <span className={styles.about__cv}>Download page as PDF</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
