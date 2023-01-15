import styles from './styles.module.css';
import { Rating } from '../Rating/Rating';
import { Size } from '../../constants/ui';

export const Review = ({ review }) => {
  return (
    <div className={styles.root}>
      <div>{review.text}</div>
      <Rating value={review.rating} size={Size.s}/>
    </div>
  );
};
