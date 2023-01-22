import styles from './styles.module.css';
import { Rating } from '../Rating/Rating';
import { Size } from '../../constants/ui';
import { useSelector } from 'react-redux';
import {
  selectReviewById,
  selectUserIdByReviewId,
} from '../../store/modules/review/selectors';
import { User } from '../User/User';

export const Review = ({ reviewId }) => {
  const { text, rating } = useSelector((state) =>
    selectReviewById(state, { reviewId })
  );

  const userId = useSelector((state) =>
    selectUserIdByReviewId(state, { reviewId })
  );
  return (
    <div className={styles.root}>
      <div>{text}</div>
      <Rating value={rating} size={Size.s} />
      <User userId={userId} className={styles.user} />
    </div>
  );
};
