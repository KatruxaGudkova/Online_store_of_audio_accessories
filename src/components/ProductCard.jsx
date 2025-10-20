import "./ProductCard.scss";

function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card">
      <img src={product.image} className="image" alt={product.name} />

      <div className="product-info">
        <div className="left">
          <h3>{product.name}</h3>
          <div className="rating">
            <img src="/images/star.svg" className="star-icon" />
            {product.rating}
          </div>
        </div>

        <div className="right">
          <div className="price-wrapper">
            <span className="price">{product.price} ₽</span>
            {product.oldPrice && (
              <span className="old-price">{product.oldPrice} ₽</span>
            )}
          </div>
        </div>
        <button onClick={onAdd}>Купить</button>
      </div>
    </div>
  );
}

export default ProductCard;
