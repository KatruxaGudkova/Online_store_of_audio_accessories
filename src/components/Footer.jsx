import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      {/* внешний фон (тянется на 100%) */}
      <div className="footer-container">
        {/* внутренний контент (центрируется и ограничен шириной, как .catalog) */}
        <div className="footer-content">
          <div className="footer-logo">QPICK</div>

          <ul className="footer-links">
            <li>
              <Link to="#">Избранное</Link>
            </li>
            <li>
              <Link to="/cart">Корзина</Link>
            </li>
            <li>
              <Link to="#">Контакты</Link>
            </li>
          </ul>

          <ul className="footer-policy">
            <li>
              <Link to="#">Условия сервиса</Link>
            </li>
            <li className="footer-lang">
              <img src="/images/lang.svg" alt="lang" />
              <span className="active">Рус</span>{" "}
              <span className="inactive">Eng</span>
            </li>
          </ul>

          <div className="footer-socials">
            <a href="https://vk.com/gudook" target="_blank" rel="noreferrer">
              <img src="/images/vk.svg" alt="VK" />
            </a>
            <a href="https://t.me" target="_blank" rel="noreferrer">
              <img src="/images/telegram.svg" alt="Telegram" />
            </a>
            <a href="https://wa.me" target="_blank" rel="noreferrer">
              <img src="/images/whatsapp.svg" alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
