export const Dish = ({name, price, ingredients}) => {
  return (
    <div>
      <strong>{name}</strong>
      <ul>
        {ingredients.map(item => <li>
          {item}
        </li>)}
      </ul>
      <div>cost: {price}</div>
    </div>
  )
}