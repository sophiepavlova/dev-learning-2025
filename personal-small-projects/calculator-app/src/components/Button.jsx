export default function Button({ type = "light", children, onClick }) {
  let className = "calc-button ";

  if (type === "light") className += "btn-light";
  if (type === "dark") className += "btn-dark";
  if (type === "accent") className += "btn-accent";

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
