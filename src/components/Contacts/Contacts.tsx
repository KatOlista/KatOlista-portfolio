import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { contacts } from '../../utils';
import { ContactItem, Title } from '..';

import styles from './Contacts.module.scss';

export const Contacts = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.timeline()
      .from(`.${styles.contacts}`, {
        scrollTrigger: {
          trigger: `.${styles.contacts}`,
          start: '-20% 80%',
          end: '0%',
          scrub: 1,
        },
        opacity: 0,
        y: '25%',
        delay: 1,
        duration: 1,
      })
    });

  return (
    <section id="Contacts" className={styles.contacts}>
      <div className="container">
        <Title content="Contacts" />

        <ul className={styles.contacts__list}>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </ul>
      </div>
    </section>
  );
};
