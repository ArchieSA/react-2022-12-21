import { Review } from "../Review/Review";

export const Reviews = ({ reviews }) => {
    return (
        <div>
            <h2>Reviews</h2>
            <ul>
                {
                    reviews.map(({user, text, rating}) => <li><Review user={user} text={text} rating={rating} /></li>)
                }
            </ul>
        </div>
    )
}