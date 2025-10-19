import "./ProductCard.scss";

function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>
        <span className="price">{product.price} ₽</span>
        {product.oldPrice && (
          <span className="old-price">{product.oldPrice} ₽</span>
        )}
      </div>
      <button onClick={onAdd}>Купить</button>
    </div>
  );
}

export default ProductCard;
