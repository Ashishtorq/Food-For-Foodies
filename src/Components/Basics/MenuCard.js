import React from "react";
import "./style.css";
const MenuCard = ({ menuData }) => {
  // console.log(menuData)
  return (
    <div className="semantic-purpose">
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          return (
            <div className="card-container">
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">1</span>
                  <span className="card-author" subtle>
                    Breakfast
                  </span>
                  <h2 className="card-tittle">Maggi</h2>
                  <span className="card-description subtle">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Necessitatibus eveniet maiores blanditiis quam. Praesentium,
                    corrupti vero labore et provident aliquam consequatur atque,
                    voluptates alias natus error, eaque quia aliquid dolorum!
                    Quibusdam harum alias asperiores labore quia sunt aut
                    ratione sapiente ipsa quos? Aperiam culpa velit quae eaque
                    enim nostrum eveniet!
                  </span>
                  <div className="card-read">Read</div>
                  <div>
                    <img src={Image} alt="images" className="card-media" />
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
