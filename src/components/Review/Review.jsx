export const Review = ({ user, text, rating }) => {
    return (
        <div>
            <div>
                User: {user}
            </div>
            <div>
                Text: {text}
            </div>
            <div>
                Rating: {rating}
            </div>
        </div>
    )
}