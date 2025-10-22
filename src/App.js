import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import "./styles.scss";

function App() {
  const [basketCount, setBasketCount] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    setBasketCount(savedCart.length);
  }, []);

  // функция для добавления товара
  const handleAddToBasket = (product) => {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart.push(product);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    setBasketCount(cart.length);
  };

  return (
    <Router>
      <div className="App">
        <Header basketCount={basketCount} />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<Catalog onAddToCart={handleAddToBasket} />}
            />

            <Route
              path="/cart"
              element={<Cart setBasketCount={setBasketCount} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
