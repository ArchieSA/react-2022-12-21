import { Review } from '../Review/Review';
import { useSelector } from 'react-redux';
import { selectRestaurantReviewsById } from '../../store/modules/restaurant/selectors';

export const Reviews = ({ restaurantId }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, { restaurantId })
  );

  if (!reviewIds) {
    return null;
  }

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviewIds.map((id) => (
          <li>
            <Review reviewId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
