import { useSelector } from "react-redux";
import { Review } from "../Review/Review";
import { selectRestaurantReviewsById } from "../../store/modules/restaurant/selectors";

export const Reviews = ({ restaurantId }) => {
    const reviewsIds = useSelector(selectRestaurantReviewsById(restaurantId))
    console.log(reviewsIds);
    return <div>
        <h2>Reviews</h2>
        <ul>
            {reviewsIds.map((id) =>
                <li key={id}>
                    <Review reviewId={id} />
                </li>
            )}
        </ul>
    </div>
}