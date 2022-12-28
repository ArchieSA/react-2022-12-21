import './Review.css';

export const Rewiew = ({ user, text, rating }) => {

    if(!text && !rating) {
        return false;
    }

    return (
        <div className="review">
            <div>
                <cite>{ user ? user : 'Unknown user' }</cite>
                <p>{ text ? text : '' }</p>
            </div>
            <div>{ rating ? rating : 'No rating' }</div>
        </div>
    )
}
