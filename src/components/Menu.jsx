import { Dish } from './Dish'

export const Menu = ({ items }) => {
  return (
    <div>
      <h2>Menu</h2>
      {items && items.length > 0 ? <ul>
        {items.map((menuItem) => (
          <li style={{ marginBottom: 10 }}>
            <Dish item={menuItem} />
          </li>
        ))}
      </ul> : 'it`s temporarily empty here'}
    </div>
  )
}