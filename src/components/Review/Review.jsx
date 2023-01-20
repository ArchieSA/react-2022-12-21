import styles from './styles.module.css';
import { Rating } from '../Rating/Rating';
import { Size } from '../../constants/ui';
import { useSelector } from 'react-redux';
import { selectReviewById } from '../../store/modules/review/selectors';
import User from '../User/User';

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, { reviewId }));
  console.log(review);
  return (
    <div className={styles.root}>
      <div>{review.text}</div>
      <Rating value={review.rating} size={Size.s} />
      <User userId={review.userId} />
    </div>
  );
};
