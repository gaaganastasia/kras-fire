import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
      <div className={`nav ${props.isOpen ? `nav_opened` : ``}`}>
        <div className="nav__overlay"></div>
      
        <div className="nav__container">
          <button
            className="nav__close-btn"
            type="reset"
            onClick={props.changeState}
          ></button>
          <ul className="nav__list">
            <li className="nav__element">
              <Link to="/catalog" className="nav__link" onClick={props.changeState}>
                Каталог
              </Link>
            </li>
            <li className="nav__element">
              <Link to="/" className="nav__link" onClick={props.changeState}>
                Доставка и оплата
              </Link>
            </li>
            <li className="nav__element">
              <Link to="/" className="nav__link" onClick={props.changeState}>
                Возврат
              </Link>
            </li>
            <li className="nav__element">
              <Link to="/" className="nav__link" onClick={props.changeState}>
                Акции и скидки
              </Link>
            </li>
            <li className="nav__element">
              <Link to="/" className="nav__link" onClick={props.changeState}>
                Новости
              </Link>
            </li>
            <li className="nav__element">
              <Link to="/" className="nav__link" onClick={props.changeState}>
                Отзывы
              </Link>
            </li>
            <li className="nav__element">
              <a href="tel:+71234567890" className="nav__phone">+7 123 456-78-90</a>
            </li>
          </ul>
        </div>
      </div>
      
    
  );
}

export default Navigation;
