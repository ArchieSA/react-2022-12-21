export const Review = ({ user, text, rating }) => {
    return (
        <div>
            <div>Name: {user}</div>
            <div>Review: {text}</div>
            <div>Rating: {rating}/5</div>
        </div>
    )
}