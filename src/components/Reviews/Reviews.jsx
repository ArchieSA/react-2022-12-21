import { Review } from '../Review/Review';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantReviewsById } from '../../store/modules/restaurant/selectors';
import { useEffect } from 'react';
import { loadReviews } from '../../store/modules/review/actions';

export const Reviews = ({ restaurantId }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, { restaurantId })
  );

  const dispatch = useDispatch();
  useEffect(() => [dispatch(loadReviews(restaurantId))], []);
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
