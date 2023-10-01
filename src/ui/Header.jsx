import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header>
      <Link to="/">Fast React Company</Link>
      <SearchOrder />
      <p>Jonas</p>
    </header>
  );
};

export default Header;
