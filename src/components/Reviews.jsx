import { Review } from './Review'

export const Reviews = ({ items }) => {
  return (
    <div>
      <h2>Reviews</h2>

      {items && items.length > 0 ?
        (<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridGap: '20px' }}>
          {
            items?.map((review) => (
              <div style={{ background: '#fff', padding: '20px' }}>
                <Review item={review} />
              </div>))
          }
        </div>) : 'it`s temporarily empty here'}
    </div>
  )
}