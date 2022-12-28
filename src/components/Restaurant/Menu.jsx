import Dish from './Dish';

function Menu({ menu }) {
  const menuList = menu.map((el) => <Dish name={el.name} price={el.price} ingredients={el.ingredients}/>);
  return (
    <ul>
      {menuList}
    </ul>
  );
}

export default Menu;
