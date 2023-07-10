import { useState } from "react";
import "./style.css";
import Image from "../../assets/images/maggi.jpg";
import Menu from "./menuAPI";
import MenuCard from "./MenuCard";
const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  console.log(menuData);
  return (
    <div>
      <MenuCard  menuData = {menuData} />
    </div>
  );
};

export default Restaurant;
