function Review({ item }) {
  return (
    <div>
      <p>{item.user}</p>
      <p>{item.text}</p>
      <p>{item.rating}</p>
    </div>
  );
}

export default Review;
