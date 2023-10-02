import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalPrice = useSelector(getTotalCartPrice);
  const totalQuantity = useSelector(getTotalCartQuantity);

  if (!totalQuantity) return null;
  return (
    <div className="flex items-center justify-between px-4 py-4 text-sm bg-stone-800 text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold uppercase text-stone-300 sm:space-x-6">
        <span>{totalQuantity}</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
