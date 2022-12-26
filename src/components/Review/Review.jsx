export function Review({ user, text, rating }) {
    return (
        <div>
            <h3>{`Comment ${user}:`}</h3>
            <p>{text}</p>
            <span>{`Rating: ${rating}`}</span>
        </div>
    );
};