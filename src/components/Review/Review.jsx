export function Review({ user, text, rating }) {
  return (
    <div>
      <h3>{user}</h3>
      <p>{text}</p>
      <p>{rating}</p>
    </div>
  );
}
