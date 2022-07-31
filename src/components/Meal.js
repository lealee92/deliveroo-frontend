import React from "react";
const Meal = ({
  title,
  description,
  popular,
  price,
  picture,
  setSelectedProducts,
  selectedProducts,
}) => {
  return (
    <div
      className="meal-container"
      onClick={() => {
        const copy = [...selectedProducts];
        let isProductFound = false;
        for (let i = 0; i < copy.length; i++) {
          if (copy[i].title === title) {
            // produit déjà présent dans le panier
            copy[i].quantity++;
            isProductFound = true;
          }
        }
        if (isProductFound === false) {
          copy.push({ title: title, quantity: 1, price: price });
        }
        setSelectedProducts(copy);

        // ajouter dans l'état selectedproducts, un objet qui pourrait avoir cette structure
        // {title: "Brunch vegan", quantity 1, price 25}
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>{title}</p>
        <p style={{ color: "grey" }}>{description}</p>
        <div className="meal-horizontal">
          <p>{price}</p>
          {popular === true ? <p>Populaire</p> : null}
        </div>
      </div>
      {picture ? (
        <img src={picture} alt={title} style={{ objectFit: "cover" }} />
      ) : null}
    </div>
  );
};

export default Meal;
