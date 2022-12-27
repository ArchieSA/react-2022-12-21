export const Dish = ({ item }) => {
  return (
    <div>
      <div>
        {item.name} - <b>{item.price} $</b>
      </div>
      <div style={{ opacity: 0.6, fontSize: '14px' }}>
        {item.ingredients?.join(', ')}
      </div>
    </div>
  )
}