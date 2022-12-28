import Review from './Review';

function Reviews({ reviews }) {
  const reviewsList = reviews.map((el) => <Review item={el}/>)
  return (
    <ul>
      {reviewsList}
    </ul>
  );
}

export default Reviews;
