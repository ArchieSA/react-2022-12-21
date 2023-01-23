import styles from './styles.module.css';
import { Rating } from '../Rating/Rating';
import { User } from '../User/User';
import { Size } from '../../constants/ui';
import { useSelector } from 'react-redux';
import { selectReviewById } from '../../store/modules/review/selectors';

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, { reviewId }));

  return ( (review) ?
    <div className={styles.root}>
      <div className={styles.grid}>
        <User userId={review.userId} size={Size.s}/>
        {review.text}
      </div>
      <Rating value={review.rating} size={Size.s} />      
    </div>
    : null
  );
};
