import { Link } from "react-router-dom";

function Button({ children, onClick, to, type = "primary" }) {
  const base =
    "inline-block font-semibold underline-none tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full focus-ring-offset text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + "px-4 py-3 sm:px-6 sm:py-4",
    small: base + "px-2 md:px-5 md:py-2.5 py-2 text-xs",
    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 bg:stone-300 hover:text-stone-800 focus:outline-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );
  return <button className={styles[type]}>{children}</button>;
}

export default Button;
