import { Review } from '../Review/Review';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantReviewsById } from '../../store/modules/restaurant/selectors';
import { useEffect } from 'react';
import { loadReviews } from '../../store/modules/review/actions';
import { selectIsReviewLoading } from '../../store/modules/review/selectors';
import { selectIsUserLoading } from '../../store/modules/user/selectors';
import { loadUsers } from '../../store/modules/user/actions';

export const Reviews = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const isReviewsLoading = useSelector(selectIsReviewLoading);
  const isUsersLoading = useSelector(selectIsUserLoading);

  useEffect(() => {
    dispatch(loadReviews(restaurantId));
  }, [restaurantId]);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, { restaurantId })
  );

  console.table(reviewIds)

  return (
    <div>
      <h2>Reviews</h2>
      {isReviewsLoading || isUsersLoading ? (
      <span>Loading...</span>) : (
        <ul>
        {reviewIds.map((id) => (
          <li key={id}>
            <Review reviewId={id} />
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};
