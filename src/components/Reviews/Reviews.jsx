import { useSelector } from 'react-redux';

import { selectRestaurantReviewsById } from '../../store/modules/restaurant/selectors';
import { Review } from '../Review/Review';

export const Reviews = ({ restaurantId }) => {
  const reviewIds = useSelector((state) => selectRestaurantReviewsById(state, { restaurantId }));

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviewIds.map((id) => (
          <li key={id}>
            <Review id={id}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
