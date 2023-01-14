import { Review } from '../Review/Review';
import styles from './styles.module.css';

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h2 className={styles.root}>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
