import styles from './Title.module.scss';

type Props = {
  content: string;
};

export const Title: React.FC<Props> = ({ content }) => (
    <h3 className={styles.title}>{content}</h3>
  );
