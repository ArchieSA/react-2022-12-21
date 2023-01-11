export const Button = ({ children, onClick, disabled, key }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
