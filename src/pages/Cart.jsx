import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <ul>
            {cart.map((item, i) => (
              <li key={i}>
                {item.name} — {item.price} ₽
              </li>
            ))}
          </ul>
          <p>Всего: {total} ₽</p>
        </>
      )}
    </div>
  );
}

export default Cart;
