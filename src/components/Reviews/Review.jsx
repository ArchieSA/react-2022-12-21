export const Review = ({id, user, text, rating}) => {

    return (
        <div>
            <p>
                <h5>{user} <span>{rating}</span></h5>
                <p>{text}</p>
            </p>
            <hr/>
        </div>
    )
}