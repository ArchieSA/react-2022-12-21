import { Review } from '../Review/Review';

export const Reviews = ({ restaurant }) => {
  const reviews = restaurant.reviews;

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review}>
            <Review reviewId={review}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
