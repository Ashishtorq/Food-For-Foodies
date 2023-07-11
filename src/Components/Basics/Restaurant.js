import { useState } from "react";
import "./style.css";

import Menu from "./menuAPI";
import MenuCard from "./MenuCard";

// const uniqueList = Set(Menu.map((curElem)=>{
//     return curElem.category;
// }),
// );
// console.log(uniqueList);

function Restaurant() {
  const [menuData, setMenuData] = useState(Menu);
  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item" onClick={() => setMenuData(Menu)}>
            All
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("Breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("Lunch")}
          >
            Lunch
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("Evening")}
          >
            Snacks
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("Dinner")}
          >
            Dinner
          </button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </div>
  );
}

export default Restaurant;
