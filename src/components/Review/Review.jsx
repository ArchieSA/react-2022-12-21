import './Review.css';

export const Rewiew = ({ user, text, rating }) => {
    return (
        <div className="review">
            <div>
                <cite>{ user }</cite>
                <p>{ text }</p>
            </div>
            <div>{ rating }</div>
        </div>
    )
}
