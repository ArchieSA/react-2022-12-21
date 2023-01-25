import { useSelector } from 'react-redux';

import styles from './styles.module.css';

import { Rating } from '../Rating/Rating';
import { User } from '../User/User';

import { Size } from '../../constants/ui';

import { selectReviewById } from '../../store/modules/review/selestors';

export const Review = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, { reviewId: id }));

  if (!review) {
    return null;
  }

  const { userId, text, rating } = review;

  return (
    <div className={styles.root}>
      <User userId={userId} className={''} />
      <p>{text}</p>
      <Rating value={rating} size={Size.s} />
    </div>
  );
};
