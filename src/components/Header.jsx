import "./Header.scss";

function Header() {
  // временно захардкодила количество
  const favoritesCount = 3;
  const basketCount = 2;
  return (
    <header>
      <div className="logo">QPICK</div>
      <div className="navbar">
        <div className="navbar_favorite">
          <a href="#" target="_blank" rel="noreferrer">
            <img src="/images/favorite.svg" className="favorite-icon" />
            {favoritesCount > 0 && (
              <span className="badge">{favoritesCount}</span>
            )}
          </a>
        </div>
        <div className="navbar_basket">
          <a href="/cart" target="_blank" rel="noreferrer">
            <img src="/images/basket.svg" className="basket-icon" />
            {basketCount > 0 && <span className="badge">{basketCount}</span>}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
