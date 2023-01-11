import { Review } from "../Review/Review";

export function Reviews({ reviews }) {
    return (
        <div>
            <h2>Reviews:</h2>
            {
                reviews.map(({ user, text, rating }) => (
                    <Review user={user} text={text} rating={rating} />
                ))
            }
        </div>
    );
};