import { useState } from "react";
import "./style.css";

import Menu from "./menuAPI";
import MenuCard from "./MenuCard";
const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const filterItem = (category) => {};

  return (
    <div>
      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item" onClick= {filterItem("Breakfast")}>Breakfast</button>
          <button className="btn-group__item">Lunch</button>
          <button className="btn-group__item">Snacks</button>
          <button className="btn-group__item">Dinner</button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </div>
  );
};

export default Restaurant;
