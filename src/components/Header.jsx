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
          <img src="/images/favorite.svg" className="favorite-icon" />
          {favoritesCount > 0 && (
            <span className="badge">{favoritesCount}</span>
          )}
        </div>
        <div className="navbar_basket">
          <img src="/images/basket.svg" className="basket-icon" />
          {basketCount > 0 && (
            <span className="badge">{basketCount}</span>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
