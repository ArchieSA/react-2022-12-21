import { Review } from '../Review/Review';

import styles from './styles.module.css';

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h2 className={styles.subtitle}>Reviews</h2>
      <ul className={styles.root}>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
