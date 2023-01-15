import styles from './styles.module.css';
import { Rating } from '../Rating/Rating';

export const Review = ({ review }) => {
  return (
    <div className={styles.root}>
      <div>{`${review.user} - ${review.text}`}</div>
      <Rating value={review.rating} size={'m'} />
    </div>
  );
};
