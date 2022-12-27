export const Review = ({ reviews }) => {
  return (
    <div>
      <ul>
        {reviews.map(({ user, text, rating }) => (
          <>
            <li>user: {user}</li>
            <li>text: {text}</li>
            <li>rating: {rating}</li>
          </>
        ))}
      </ul>
    </div>
  );
};
