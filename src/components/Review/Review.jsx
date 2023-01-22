import styles from './styles.module.css';
import { Rating } from '../Rating/Rating';
import { Size } from '../../constants/ui';
import { useSelector } from 'react-redux';
import { selectReviewById } from '../../store/modules/review/selectors';
import { User } from '../User/User';

export const Review = ({ reviewId }) => {
  const review = useSelector(selectReviewById(reviewId))

  return (
    <div className={styles.root}>
      <User userId={review.userId} />
      <Rating value={review.rating} size={Size.s} />
      <div>{review.text}</div>
    </div>
  );
};
