import { Rating } from '../Rating/Rating';
import styles from './styles.module.css';
import { Size } from '../../constants/ui';

export const Review = ({ review }) => {
  const { text, rating } = review;
  return (
    <div className={styles.root}>
      <div>{text}</div>
      <div>{rating}</div>
      <Rating value={rating} size={Size.s} />
    </div>
  );
};
