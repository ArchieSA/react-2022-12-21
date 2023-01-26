import { Review } from '../Review/Review';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantReviewsById } from '../../store/modules/restaurant/selectors';
import { selectReviewIsLoading } from '../../store/modules/review/selectors';
import { useEffect } from 'react';
import { loadReviews } from '../../store/modules/review/actions';
import { loadUsers } from '../../store/modules/user/actions';

export const Reviews = ({ restaurantId }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, { restaurantId })
  );
  const dispatch = useDispatch();
  const isLoading = useSelector(selectReviewIsLoading);

  useEffect(() => {
    dispatch(loadReviews(restaurantId));
    dispatch(loadUsers(restaurantId));
  });

  // console.log('reviewIds:', reviewIds);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviewIds.map((id) => (
          <li key={id}>
            <Review reviewId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
