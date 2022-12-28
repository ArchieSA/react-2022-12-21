function Dish({ name, price, ingredients }) {
  const ingredientsList = ingredients.map((el) => <li>{el}</li>);
  return (
    <div>
      <h3>Dishes name: {name}</h3>
      <p>Price: {price} $</p>
      <ul>
        {ingredientsList}
      </ul>
    </div>
  );
}

export default Dish;
