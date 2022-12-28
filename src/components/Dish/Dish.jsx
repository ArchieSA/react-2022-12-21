export const Dish = ({name, price, ingredients, children}) => {
  return (
    <div>
      <strong>{name}</strong>
      {children}
      <ul>
        {ingredients.map(item => <li>
          {item}
        </li>)}
      </ul>
      <div>cost: {price}</div>
    </div>
  )
}