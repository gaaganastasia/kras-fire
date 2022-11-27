import React from "react";
import "./CartItem.css";
import { useRouteMatch } from 'react-router-dom'; 

function CartItem(props) {
  const { path, url } = useRouteMatch();

  const [productQ, setProductQ] = React.useState(props.product.quantity);

  const isCountBtnDisabled = productQ <= 1;

  function handleIncreaseBtn() {
    props.increaseProductQuantity();
    setProductQ(props.product.quantity);
  }

  function handleReduceBtn() {
    props.reduceProductQuantity();
    setProductQ(props.product.quantity);
  }

  return (
    <div className="cart__item">
      <img className="cart__item-img" src={props.product.mainImageLink} alt="Фото товара"></img>
      <div className="cart__item-info">
        <p className="cart__item-title">{props.product.name}</p>
        {/* <p className="cart__item-description">Продолжительность 24 сек</p> */}
      </div>
      <div className="cart__item-counter">
        <button type="button" onClick={handleReduceBtn} disabled={isCountBtnDisabled} className={`cart__item-number cart__item-number-btn ${productQ <= 1 ? "cart__item-number-btn_disabled" : ""}`}>-</button>
        <p className="cart__item-number">{productQ}</p>
        <button type="button" onClick={handleIncreaseBtn} className="cart__item-number cart__item-number-btn">+</button>
      </div>
      <p className="cart__item-price">{`${props.product.discount ? props.product.price * (1 - (props.product.discount / 100)) * productQ : props.product.price * productQ} ₽`}</p>
      <div className="cart__item-reset" onClick={props.onRemove}></div>
    </div>
  );
}

export default CartItem;
