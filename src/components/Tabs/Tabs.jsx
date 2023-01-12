import { Tab } from "../Tab/Tab"
export const Tabs = ({restaurants, activeRestaurant, setActiveRestaurant}) => {
  return <div style={{
    margin: '20px auto',
    width: 'max-content'
    }}>
      {restaurants.map( (restaurant) => <Tab setActiveRestaurant={setActiveRestaurant} activeRestaurant={activeRestaurant} restaurant={restaurant}></Tab>)}
  </div>
}