export const Tab = ({name, clickHandler, index}) => {
  return <button onClick={() => clickHandler(index)}>{name}</button>
}