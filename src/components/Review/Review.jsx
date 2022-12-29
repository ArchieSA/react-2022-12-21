export const Review = ({ review }) => {
  const { user, text, rating } = review;

  return (
    <div>
      {user ? <h4>{user}</h4> : 'Anonymus'}

      {!!text && <h4>{text}</h4>}

      <h4>{rating}</h4>
    </div>
  );
}
