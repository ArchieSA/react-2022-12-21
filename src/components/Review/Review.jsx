export const Review = ({review}) => {
    return (<div> { `User: ${review.user}, reply: ${review.text} , rating: ${review.rating}`
    }</div>)
}