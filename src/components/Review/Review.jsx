import styles from './styles.module.css';
import {Rating} from "../Rating/Rating";
import {Size} from "../../constants/ui";

export const Review = ({ review }) => {
  return (
    <div className={styles.root}>
      <div>{review.text}</div>
      <Rating size={Size.s} value={review.rating} />
    </div>
  );
};
