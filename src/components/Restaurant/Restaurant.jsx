import { useMemo } from 'react';

import { Menu } from '../Menu/Menu';
import { NewReviewForm } from '../NewReviewForm/NewReviewForm';
import { Reviews } from '../Reviews/Reviews';
import { Rating } from '../Rating/Rating';

import styles from './styles.module.css';

export const Restaurant = ({ restaurant }) => {
  const { reviews, menu, name } = restaurant;

  const rating = useMemo(
    () =>
      Math.round(
        reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      ),
    [reviews]
  );

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{name}</h1>

      <Rating rating={rating} size={'m'}/>

      <Menu menu={menu} />

      <Reviews reviews={reviews} />
      
      <NewReviewForm />
    </div>
  );
};
