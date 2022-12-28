import {Rewiew} from "../Review/Review";
import './Reviews.css';

export const Reviews = ({ reviews }) => {

    if(!reviews || (reviews?.length > 0 && reviews.filter(({text, rating}) => text || rating).length == 0)) {
        return (
            <div className="noReviews">
                <h2>Reviews</h2>
                <em>No reviews</em>
            </div>
        )
    }

    return (
        <div className="reviews">
            <h2>Reviews</h2>
            <ul className="review-list">
            {
                reviews && reviews.map( ({ user, text, rating}) => <li>
                    <Rewiew user={user} text={text} rating={rating} />
                </li>)
            }
            </ul>
        </div>
    )
}
