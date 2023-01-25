import styles from './styles.module.css';
import { Rating } from '../Rating/Rating';
import { Size } from '../../constants/ui';
import { useDispatch, useSelector } from 'react-redux';
import { selectReviewById } from '../../store/modules/review/selectors';
import { User } from '../User/User';
import { useEffect } from 'react';
import { loadUsers } from '../../store/modules/user/actions';

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, { reviewId }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  });
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
