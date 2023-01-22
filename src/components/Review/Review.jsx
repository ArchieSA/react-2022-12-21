import styles from './styles.module.css';
import { Rating } from '../Rating/Rating';
import { Size } from '../../constants/ui';
import { selectReviewById } from '../../store/modules/review/selector';
import { useSelector } from 'react-redux';
import { User } from '../User/User';

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, { reviewId }));

  if (!review) {
    return null;
  }

  const { text, rating, userId } = review;

  return (
    <div className={styles.root}>
      <div>{text}</div>
      <Rating value={rating} size={Size.s} />
      <User userId={userId} />
    </div>
  );
};
