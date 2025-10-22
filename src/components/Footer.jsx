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
              <a href="#">Избранное</a>
            </li>
            <li>
              <a href="/cart">Корзина</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>

          <ul className="footer-policy">
            <li>
              <a href="#">Условия сервиса</a>
            </li>
            <li className="footer-lang">
              <img src="/images/lang.svg" alt="lang" />
              <span className="active">Рус</span> <span className="inactive">Eng</span>
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
