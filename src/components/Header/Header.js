import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import { Link, useRouteMatch } from 'react-router-dom'; 

function Header(props) {
  const { path, url } = useRouteMatch();
  
  const headerClassName = `header ${ 
    props.history.location.pathname === "/cart" || props.history.location.pathname === "/confirmation" ?
    `header_hidden` :
    ``
}`
  return (
    <header className={headerClassName}>
      <Link exact="true" to="/">
        <img alt="Логотип компании" src={logo} className="header__logo"></img>
      </Link>
      <div className="header__nav">
        <ul
          className="header__nav"
          aria-labelledby="menu"
          aria-label="submenu"
        >
          <li className="header__nav-element">
            <Link to="/catalog">Каталог</Link>
          </li>
          <li className="header__nav-element">
            <a href="#">Доставка и оплата</a>
          </li>
          <li className="header__nav-element">
            <a href="#">Возврат</a>
          </li>
          <li className="header__nav-element">
            <a href="#">Акции и скидки</a>
          </li>
          <li className="header__nav-element">
            <a href="#">Новости</a>
          </li>
          <li className="header__nav-element">
            <a href="#">Отзывы</a>
          </li>
        </ul>
      </div>
      <a href="tel:+7123456789" className="header__number">+7 123 456-78-90</a>
      <div className="header__menu-icon" onClick={props.changeNavState}></div>
    </header>
  );
}

export default Header;
