import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import "./Catalog.scss";

function Catalog({ onAddToCart }) {
  const [cartCount, setCartCount] = useState(
    Number(sessionStorage.getItem("cartCount")) || 0
  );

  // const handleAddToCart = (product) => {
  //   let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  //   cart.push(product);
  //   sessionStorage.setItem("cart", JSON.stringify(cart));
  //   const newCount = cart.length;
  //   sessionStorage.setItem("cartCount", newCount);
  //   setCartCount(newCount);
  // };

  return (
    <div className="catalog">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={() => onAddToCart(p)} />
      ))}
    </div>
  );
}

export default Catalog;
