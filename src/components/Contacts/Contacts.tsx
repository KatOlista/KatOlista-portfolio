import { contacts } from '../../utils';
import { ContactItem, Title } from '..';

import styles from './Contacts.module.scss';

export const Contacts = () => {
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
