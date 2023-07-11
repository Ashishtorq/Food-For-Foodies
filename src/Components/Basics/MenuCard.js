import React from "react";
import "./style.css";
const MenuCard = ({ menuData }) => {
  //   console.log(menuData);
  return (
    <div className="semantic-purpose">
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, description, image, category } = curElem;
          return (
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author" subtle>
                    {name}
                  </span>
                  <h2 className="card-tittle">{name}</h2>
                  <span className="card-description subtle">{description}</span>
                  <div className="card-read">Read</div>
                  <div>
                    <img src={image} alt="images" className="card-media" />
                    <span className="card-tag subtle">Order Now</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default MenuCard;
