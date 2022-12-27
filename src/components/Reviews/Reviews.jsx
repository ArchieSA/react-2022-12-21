import { Review } from "./Review"

export const Reviews = ({reviews}) => {
    return(
        <div className="reviews">
            <h2>Restaurant reviews</h2>            
            <ul>
                {reviews?.map( ({user, text, rating}) => <li><Review text={text} user={user} rating = {rating}></Review></li>)}   
            </ul>
        </div>
    )
}