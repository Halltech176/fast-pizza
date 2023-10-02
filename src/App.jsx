import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, { CreateOrderAction } from "./features/order/CreateOrder";
import Order, { OrderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import { UpdateOrderAction } from "./features/order/UpdateOrder";

import { MenuLoader } from "./features/menu/Menu";
import Error from "./ui/Error";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: MenuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: CreateOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: OrderLoader,
        action: UpdateOrderAction,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
