import {Button} from "../Button/Button";

export const Restaurant = ({ name, menu }) => {
    return (
        <div>
            <h1>{name}</h1>
            <div>
                <h2>Menu</h2>
                <ul>
                    {
                        menu.map(({name}) => <li>
                            {name}
                            <Button>-</Button>
                            <Button>+</Button>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}