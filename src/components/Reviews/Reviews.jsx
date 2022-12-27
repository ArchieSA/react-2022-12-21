export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews:</h2>
      <ul>
        {reviews.map(({ id }) => (
          <li>{id}</li>
        ))}
      </ul>
    </div>
  );
};
