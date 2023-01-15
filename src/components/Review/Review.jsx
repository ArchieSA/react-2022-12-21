import styles from './styles.module.css';

export const Review = ({ review }) => {
  return (
    <div className={styles.root}>
      <p>{`"${review.text}"`}</p>
      <div>{review.rating}</div>
    </div>
  );
};
