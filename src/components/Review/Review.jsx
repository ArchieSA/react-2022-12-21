
import styles from './styles.module.css';

export const Review = ({ review }) => {
  return (
    <div className={styles.root}>
      <div>{review.text}</div>
      <div>{review.rating}</div>
    </div>
  );
};
