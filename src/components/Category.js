import React from "react";
import Meal from "./Meal";

const Category = (props) => {
  return (
    <>
      <h1 className="cat-name">{props.name}</h1>
      <div className="meals-container">
        {props.meals.map((meal, index) => {
          // transmet toutes les clés de meal en tant que props
          return (
            <Meal
              {...meal}
              key={index}
              selectedProducts={props.selectedProducts}
              setSelectedProducts={props.setSelectedProducts}
            />
          );
        })}
      </div>
    </>
  );
};

export default Category;
