import { Menu } from './Menu'
import { Reviews } from './Reviews'

export const Restaurant = ({ item }) => {
    return (
        <div style={{ padding: '20px', background: '#eeeefe', margin: '20px' }}>
            <h1>{item.name}</h1>

            <Menu items={item.menu} />

            <Reviews items={item.reviews} />

        </div>
    )
}