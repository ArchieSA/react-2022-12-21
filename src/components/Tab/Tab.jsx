export const Tab = ({restaurant,activeRestaurant,setActiveRestaurant}) => {
  return <div style={{display: 'inline'}}>
    <button onClick={() => setActiveRestaurant(restaurant)} disabled={activeRestaurant.name === restaurant.name}>
      {restaurant.name}
    </button>
  </div>
}