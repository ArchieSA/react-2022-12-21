import { Review } from '../Review/Review';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantReviewsById } from '../../store/modules/restaurant/selectors';
import { selectIsReviewLoading } from '../../store/modules/review/selectors';
import { useEffect } from 'react';
import { loadReviews } from '../../store/modules/review/actions';
import { loadUsers } from '../../store/modules/user/actions';

export const Reviews = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, { restaurantId })
  );
  const isLoading = useSelector(selectIsReviewLoading);

  useEffect(() => {
    dispatch(loadReviews(restaurantId));
  }, [restaurantId]);
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <div>
      <h2>Reviews</h2>
      {isLoading ? (
        <span>Loading reviews ...</span>
      ) : (
        <ul>
          {reviewIds.map((id) => (
            <li>
              <Review reviewId={id} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
