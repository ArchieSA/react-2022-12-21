import { Menu } from '../Menu/Menu';
import { Reviews } from '../Reviews/Reviews';
import { useMemo } from 'react';
import { NewReviewForm } from '../NewReviewForm/NewReviewForm';
import { Rating } from '../Rating/Rating';
import { Size } from '../../constants/ui';
import styles from './styles.module.css';
import classnames from 'classnames';

export const Restaurant = ({ restaurant }) => {
  const { reviews, menu, name } = restaurant;

  const rating = useMemo(
    () =>
      Math.round(
        reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      ),
    [reviews]
  );

  // const [a] = useState();
  // const [b] = useState();
  // const [c] = useState();
  //
  // const abc = useMemo(
  //   () => ({
  //     a,
  //     b,
  //     c,
  //   }),
  //   [a, b, c]
  // );

  return (
    <div className={classnames(styles.root)}>
      <h1>{name}</h1>
      <Rating size={Size.l} value={rating} />
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      <NewReviewForm />
    </div>
  );
};
