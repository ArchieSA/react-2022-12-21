import {Rewiew} from "../Review/Review";
import './Reviews.css';

export const Reviews = ({ reviews }) => {
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
