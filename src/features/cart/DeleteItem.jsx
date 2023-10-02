import { deleteItem } from "./cartSlice";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(deleteItem(pizzaId))} type="small">
      Delete
    </Button>
  );
}

export default DeleteItem;
