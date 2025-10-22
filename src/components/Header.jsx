import { Link } from "react-router-dom";
import "./Header.scss";

function Header({ basketCount }) {
  // временно захардкодила количество
  const favoritesCount = 3;
  // const basketCount = 2;
  return (
    <header>
      <div className="logo">QPICK</div>
      <div className="navbar">
        <div className="navbar_favorite">
          <Link to="#">
            <img src="/images/favorite.svg" className="favorite-icon" />
            {favoritesCount > 0 && (
              <span className="badge">{favoritesCount}</span>
            )}
          </Link>
        </div>
        <div className="navbar_basket">
          <Link to="/cart">
            <img src="/images/basket.svg" className="basket-icon" />
            {basketCount > 0 && <span className="badge">{basketCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
