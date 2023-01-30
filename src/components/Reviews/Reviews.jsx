import { Review } from '../Review/Review';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectRestaurantReviewsById } from '../../store/modules/restaurant/selectors';
import { selectIsReviewLoading } from '../../store/modules/review/selectors';
import { loadReviews } from '../../store/modules/review/actions';

export const Reviews = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, { restaurantId })
  );
  //console.log('reviewIds:', reviewIds);

  const isLoading = useSelector(selectIsReviewLoading);

  useEffect(() => {
    dispatch(loadReviews(restaurantId));
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
