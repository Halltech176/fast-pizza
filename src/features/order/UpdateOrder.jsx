import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";

import Button from "../../ui/Button";
const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button>Make Priority</Button>
    </fetcher.Form>
  );
};

export default UpdateOrder;

export const UpdateOrderAction = async ({ request, params }) => {
  console.log("update");
  const data = { prority: true };
  await updateOrder(params.orderId, data);
  return null;
};
