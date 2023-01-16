import { Rating } from '../Rating/Rating';
import styles from './styles.module.css';

export const Review = ({ review }) => {
  return (
    <div className={styles.root}>
      <Rating size={'s'} rating={review.rating} />
      <p className={styles.text}>{`'${review.text}'`}</p>
    </div>
  );
};
