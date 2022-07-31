import React from "react";

const Cart = (props) => {
  const { setSelectedProducts, selectedProducts } = props;
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
    ></div>
  );
};

export default Cart;
