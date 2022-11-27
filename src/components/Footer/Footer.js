import React from "react";
import "./Footer.css";
import logo from '../../images/logo.svg';
import { Link, useRouteMatch } from "react-router-dom";

function Footer(props) {
  const { path, url } = useRouteMatch();

  const footerClassName = `footer ${
    props.history.location.pathname === "/cart" || 
    props.history.location.pathname === "/confirmation" || 
    props.history.location.pathname === "/login" || 
    props.history.location.pathname === "/add-product" ?
    `footer_hidden` :
    ``
  }`

  return (
    <footer className={footerClassName}>
      <Link exact="true" to="/">
        <img src={logo} className="footer__logo" alt="Логотип компании"></img>
      </Link>
      <div className="footer__links">
        <div className="footer__section">
          <a href="tel:+71234567890" className="footer__number">+7 123 456-78-90</a>
          <a href="#" className="footer__link">VK</a>
        </div>
        <div className="footer__section">
          <Link to="/catalog" className="footer__link">Каталог</Link>
          <a href="#" className="footer__link">Доставка и оплата</a>
          <a href="#" className="footer__link">Возврат</a>
          <a href="#" className="footer__link">Акции и скидки</a>
          <a href="#" className="footer__link">Новости</a>
          <a href="#" className="footer__link">Отзывы</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
