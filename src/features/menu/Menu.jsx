import { useLoaderData } from "react-router";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "../menu/MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="px-2 divider-y divider-stone-200">
      {menu.map((pizza) => {
        return <MenuItem pizza={pizza} key={pizza.id} />;
      })}
    </ul>
  );
}

export const MenuLoader = async () => {
  const menu = await getMenu();

  return menu;
};

export default Menu;
