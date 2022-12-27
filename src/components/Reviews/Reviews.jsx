import { Review } from '../Review/Review';

export function Reviews({ items }) {
  return (
    <div>
      {items.map(({ user, text, rating, id }) => (
        <Review key={id} user={user} text={text} rating={rating} />
      ))}
    </div>
  );
}
