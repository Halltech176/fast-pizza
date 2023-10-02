import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 uppercase bg-yellow-500 border-b-2 border-stone-500 sm:px-6">
      <Link className="tracking-widest" to="/">
        Fast React Company
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
