import { useState, useEffect } from "react";
import "../reset.css";
import "./App.css";
import Logo from "../assets/logo.png";
import Category from "../components/Category";

// HTML
// ETATS
// INTERACTION
// CSS

function App() {
  const [restaurant, setRestaurant] = useState({});
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([
    { title: "Brunch", price: "25", quantity: "1" },
    { title: "Brunch vegan", price: "35", quantity: "1" },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://deliveroo-backend-ll.herokuapp.com/"
      );
      const data = await response.json();
      setRestaurant(data.restaurant);
      setCategories(data.categories);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>En cours de chargement...</p>
      ) : (
        <div>
          <div className="header">
            <div className="wrapper">
              <img className="logo" src={Logo} alt="img" />
            </div>
          </div>
          <div className="wrapper">
            <div className="restaurant-info">
              <div>
                <p className="title-header">{restaurant.name}</p>
                <p className="text-header">{restaurant.description}</p>
              </div>
              <img src={restaurant.picture} alt={restaurant.name} />
            </div>
          </div>
          <div className="gray-back">
            <div className="wrapper">
              <div className="restaurant-details">
                <div className="meals">
                  {categories.map((category, index) => {
                    if (category.meals.length === 0) {
                      return null;
                    }
                    return (
                      <Category
                        setSelectedProducts={setSelectedProducts}
                        selectedProducts={selectedProducts}
                        name={category.name}
                        meals={category.meals}
                        key={index}
                      />
                    );
                  })}
                </div>

                <div className="cart">
                  {selectedProducts.map((selectedProduct) => {
                    return (
                      <div>
                        <h3>Valider mon panier</h3>
                        <button>-</button>
                        <p>{selectedProduct.title}</p>
                        <button>+</button>
                        <p>{selectedProduct.quantity}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
