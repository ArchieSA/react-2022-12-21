export const Dish = ({name, price, ingredients, children}) => {
  return (
    <div>
      <strong>{name}</strong>
      <ul>
        {ingredients.map(item => <li>
          {item}
          {children}
        </li>)}
      </ul>
      <div>cost: {price}</div>
    </div>
  )
}