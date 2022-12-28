import { Review } from '../Review/Review'

export const Reviews = ({reviews}) => {
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => <li>
          <Review {...review}/>
        </li>)}
      </ul> 
    </div>
  )
}