export const Review = ({user, rating, text}) => {
  return (
    <div>
      <strong>{user}</strong>
      <div>rate: {rating}/5</div>
      <div>opinion: <strong>{text}</strong></div>
    </div>
  )
}