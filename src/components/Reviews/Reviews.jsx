import { Review } from '../Review/Review';
import { useSelector } from 'react-redux';
import { selectReviewIdsByRestaurantId } from '../../store/modules/restaurant/selectors';

export const Reviews = ({ restaurantId }) => {
  const reviewIds = useSelector((state) =>
    selectReviewIdsByRestaurantId(state, { restaurantId })
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
