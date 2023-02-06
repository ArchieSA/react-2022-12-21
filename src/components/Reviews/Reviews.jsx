import { Review } from '../Review/Review';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantReviewsById } from '../../store/modules/restaurant/selectors';
import { useEffect } from 'react';
import { selectIsReviewLoading } from '../../store/modules/review/selectors';
import { fetchReviewsByRestaurantId } from '../../store/modules/review/thunk/fetchReviewsByRestaurantId';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const dispatch = useDispatch();
  const { restaurantId } = useParams();
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, { restaurantId })
  );
  const isLoading = useSelector(selectIsReviewLoading);

  useEffect(() => {
    dispatch(fetchReviewsByRestaurantId(restaurantId));
  }, [restaurantId]);

  if (isLoading) {
    return <span>Loading...</span>;
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
