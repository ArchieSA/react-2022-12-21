import { useSelector } from 'react-redux';
import { selectRestauranReviewsById } from '../../store/modules/restaurant/selectors';
import { Review } from '../Review/Review';

export const Reviews = ({ restaurantId }) => {
  const reviews = useSelector((state) =>
    selectRestauranReviewsById(state, { restaurantId })
  );
  //   console.log(reviews);
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((reviewId) => (
          <li key={reviewId}>
            <Review reviewId={reviewId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
