import { Contact } from '../../types';

import styles from './ContactItem.module.scss';

import Arrow from '../../assets/icons/arrow.svg?react';

type Props = {
  contact: Contact
};

export const ContactItem: React.FC<Props> = ({ contact }) => {
  const Icon = contact.icon
  return (
    <li className={styles.contact}>
      <a target='_blanc' href={contact.link} className={styles.contact__link}>
        <Icon className={styles.contact__icon} />

        <p>
          {contact.title}
          <Arrow className={styles.contact__arrow} />
        </p>
      </a>
    </li>
  );
};
