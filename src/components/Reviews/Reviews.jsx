import { useSelector } from 'react-redux';
import { selectRestaurantReviewById } from '../../store/modules/restaurant/selectors';
import { Review } from '../Review/Review';

export const Reviews = ({ restaurantId }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewById(state, { restaurantId })
  );
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviewIds.map((reviewId) => (
          <li>
            <Review reviewId={reviewId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
