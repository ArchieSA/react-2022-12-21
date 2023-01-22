import { useSelector } from 'react-redux';

import styles from './styles.module.css';

import { Rating } from '../Rating/Rating';
import { User } from '../User/User';

import { Size } from '../../constants/ui';

import { selectReviewById } from '../../store/modules/review/selestors';
import { selectUserById } from '../../store/modules/user/selestors';

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, { reviewId }));

  const userId = useSelector((state) => selectUserById(state, { userId: review.userId }));

  return (
    <div className={styles.root}>
      <User userId={userId} className={''} />
      <p>{review.text}</p>
      <Rating value={review.rating} size={Size.s} />
    </div>
  );
};
