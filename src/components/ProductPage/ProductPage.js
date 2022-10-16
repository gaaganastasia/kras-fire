import React from "react";
import "./ProductPage.css";
import SearchForm from "../SearchForm/SearchForm";
import { useParams } from "react-router-dom";
import Swiper from "../Swiper/Swiper";


function ProductPage(props) {
  let { id } = useParams();
  const product = props.products.find((i) => i.id === Number(id));

  const isInCart = props.cartItems && props.cartItems.some((p) => p.id === Number(id));

  return (
    <div className="product__container">
      <SearchForm cartItems={props.cartItems} history={props.history} ></SearchForm>
      {
        props.products && 
        <div className="product">
          <Swiper product={product} />
          <p className="product__title">{`${product.category} «${product.name}»`}</p>
          <p className="product__price">{`${product.price} ₽`}</p>
          <p className="product__description">{product.description}</p>
          {/* <div className="product__counter">
            <p className="product__number product__number-btn">-</p>
            <p className="product__number">1</p>
            <p className="product__number product__number-btn">+</p>
          </div> */}
          <button type="button" disabled={isInCart ? true : false} onClick={() => props.onAdd(product)} className={`product__btn ${isInCart ? "product__btn_disabled" : ""}`}>{isInCart ? "Добавлено" : "В корзину"}</button>

          {/* <button type="button" disabled={isInCart ? true : false} onClick={props.onAdd} className={`catalog__item-btn ${isInCart ? "catalog__item-btn_disabled" : ""}`}></button> */}
          {/* <div className="product__arrow product__arrow_right"></div>
          <div className="product__arrow product__arrow_left"></div> */}
        </div>
      }
      
    </div>
  );
}

export default ProductPage;