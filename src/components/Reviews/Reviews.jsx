
import { Review } from "../Review/Review";
export const Reviews = ({reviews}) => {
    return (
        <div>
            <h3>Reviews</h3>
                <ul>
                    {reviews.map(({user,text,rating}) =>
                         <Review user={user} text={text} rating={rating}>
                         </Review>
                    )}
                </ul>
        </div>
    );
};
