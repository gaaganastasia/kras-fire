import React from "react";
import "./Cart.css";
import { useRouteMatch } from 'react-router-dom'; 
import CartItems from "../CartItems/CartItems";
import InputMask from 'react-input-mask';

function Cart(props) {
  const { path, url } = useRouteMatch();

  const numberRef = React.useRef('');
  const [isBtnDisabled, setIsBtnDisabled] = React.useState(true);

  function goBack() {
    props.history.goBack();
  }

  function handleChange(e) {
    setIsBtnDisabled(!(e.target.value && e.target.value.match(/\d/g).length === 11));
  }


  function handleSubmit(e) {
    e.preventDefault();
  
  }
  

  return (
    <div className="cart">
      <div className={`cart__header ${props.cartItems.length > 0 ? "cart__header_underlined" : ""}`}>
        <p className={`cart__title ${props.cartItems.length > 0 ? "" : "cart__title_hidden"}`}>Ваш заказ</p>
        <div className="cart__close-icon" onClick={goBack}></div>
      </div>
      <p className={`cart__message ${props.cartItems.length > 0 ? "cart__message_hidden" : ""}`}>В корзине ничего нет</p>
      <CartItems 
        cartItems={props.cartItems}
        increaseProductQuantity={(id) => props.increaseProductQuantity(id)}
        reduceProductQuantity={(id) => props.reduceProductQuantity(id)}
        getProductQuantity={(id) => props.getProductQuantity(id)}
        removeProduct={(product) => props.removeProduct(product)}
      />
      <p className={`cart__sum ${props.cartItems.length > 0 ? "" : "cart__sum_hidden"}`}>Итого: <span>{`${props.cost} ₽`}</span></p>
      <form
        method="get"
        action="index.html"
        name="phone"
        className={`cart__form ${props.cartItems.length > 0 ? "" : "cart__form_hidden"}`}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        onChange={handleChange}
      >
        <label className="cart__form-field" htmlFor="phone">
          <InputMask name="product"
            type="phone"
            ref={numberRef}
            placeholder="Телефон" id="phone"
            className="cart__form-input cart__form-input_phone"
            required mask="+7 999 999-99-99" maskChar=" " />
          
          <span className="cart__form-message">Для оформления заказа введите номер телефона</span>
        </label>
        <button type="submit" disabled={isBtnDisabled} className={`cart__form-submit ${isBtnDisabled ? 'cart__form-submit_disabled' : ''}`}>Оформить заказ</button>
      </form>
    </div>
  );
}

export default Cart;
