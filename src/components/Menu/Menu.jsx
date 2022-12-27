export const Menu = ({ menu }) => {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menu.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};
