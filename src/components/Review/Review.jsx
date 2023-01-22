import styles from './styles.module.css';
import { Rating } from '../Rating/Rating';
import { Size } from '../../constants/ui';
import { User } from '../User/User';
import { useSelector } from 'react-redux';
import { selectReviewById } from '../../store/modules/review/selectors';

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, { reviewId }));
  return (
    <div className={styles.root}>
      <div>{review.text}</div>
      <Rating value={review.rating} size={Size.m} />
      <User userId={review.userId} className={styles.root} />
    </div>
  );
};
