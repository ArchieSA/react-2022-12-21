import { Dish } from '../Dish/Dish';

export function Menu({ items }) {
  return (
    <div>
      {items.map(({ name, price, id }) => (
        <Dish key={id} name={name} price={price} />
      ))}
    </div>
  );
}
