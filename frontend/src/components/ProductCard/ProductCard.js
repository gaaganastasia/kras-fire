import React from "react";
import "./ProductCard.css";
import { Link, useRouteMatch } from 'react-router-dom'; 

function ProductCard(props) {
  const { path, url } = useRouteMatch();

  const isInCart = props.cartItems && props.cartItems.some((p) => p.id === props.product.id);

  return (
    <div className="catalog__item">
      <Link to={props.linkPath} className="catalog__item-img-link">
        <img src={props.product.mainImageLink} alt="Фото товара" className="catalog__item-img"></img>
      </Link>
      <div className="catalog__item-price-block">
        <div className={`catalog__item-old-price ${props.product.discount && props.product.discount > 0 && 'catalog__item-old-price_visible'}`}>
          <p className="catalog__item-old-price-text">{`${props.product.price} ₽`}</p>
          <div className="catalog__item-old-price-line"></div>
        </div>
        <p className="catalog__item-price">{`${props.product.discount ? Math.round(props.product.price * (1 - (props.product.discount / 100))) : props.product.price} ₽`}</p>
      </div>
      <div className="catalog__item-text">
        <Link to={props.linkPath} className="catalog__item-title">{props.product.name}</Link>
        {/* <p className="catalog__item-description">Продолжительность 24 сек</p> */}
      </div>
      {/* <div className="catalog__item-counter">
        <p className="catalog__item-number catalog__item-number-btn catalog__item-number-btn_down">-</p>
        <p className="catalog__item-number">1</p>
        <p className="catalog__item-number catalog__item-number-btn catalog__item-number-btn_up">+</p>
      </div> */}
      <button type="button" disabled={isInCart ? true : false} onClick={props.onAdd} className={`catalog__item-btn ${isInCart ? "catalog__item-btn_disabled" : ""}`}>
        <div className={`catalog__item-cart ${isInCart ? "catalog__item-cart_disabled" : ""}`}></div>
        {isInCart ? "Добавлено" : "В корзину"}
      </button>
    </div>
  );
}

export default ProductCard;