export const Review  = ({ item }) => {
  return (
    <div>
      <div>
        {item.user} - <b>{item.rating} &#9733;</b>
      </div>
      <div style={{ opacity: 0.6, fontSize: '14px' }}>
        {item.text}
      </div>
    </div>
  )
}