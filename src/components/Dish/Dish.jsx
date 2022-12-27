export const Dish = ({ menu }) => {
  return (
    <div>
      <h2>Information about dish:</h2>
      <ul>
        {menu.map(
          (
            { price, ingredients }, // Достаем свойства price и ingredients из объекта
          ) => (
            <li>
              price: {price} <br /> ingredients: {ingredients}
            </li>
          ),
        )}
      </ul>
    </div>
  );
};
