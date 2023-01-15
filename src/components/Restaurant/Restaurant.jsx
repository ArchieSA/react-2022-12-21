import { Menu } from '../Menu/Menu';
import { Reviews } from '../Reviews/Reviews';
import { useMemo } from 'react';
import { NewReviewForm } from '../NewReviewForm/NewReviewForm';
import { Rating } from '../Rating/Rating';

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
    <div>
      <h1>{name}</h1>
      <Rating size={'l'} value={rating} />
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      <NewReviewForm />
    </div>
  );
};
