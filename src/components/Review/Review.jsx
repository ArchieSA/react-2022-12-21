import styles from './styles.module.css';
import { Rating } from '../Rating/Rating';
import { Size } from '../../constants/ui';
export const Review = ({ review }) => {
  return (
    <div className={styles.root}>
      <span>{review.text}</span>
      <Rating size={Size.s} value={review.rating} className={styles.rating} />
    </div>
  );
};
