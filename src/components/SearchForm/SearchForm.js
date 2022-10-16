import React from "react";
import "./SearchForm.css";
import { Link } from 'react-router-dom'; 

function SearchForm(props) {

  const productRef = React.useRef('');
  const isBtnDisabled = productRef.current.value && productRef.current.value > 0 ? true : false;

  function handleSubmit(e) {
    e.preventDefault();
    props.history.push('/catalog');

    if (!productRef.current.value || productRef.current.value === " ") {
    } else {
      let products = props.products.filter(
        (product) =>
          product.name.toLowerCase().indexOf(productRef.current.value.toLowerCase()) !== -1 ||
          product.category.toLowerCase().indexOf(productRef.current.value.toLowerCase()) !== -1
      );


      localStorage.setItem('products', JSON.stringify(products));

      props.setSearchedProducts(products);
      if (products.length === 0) {
      }
      console.log(props.searchedProducts);
    }
  }

  return (
    <div className="search-form">
      <form
        method="get"
        action="index.html"
        name="search"
        className="search-form__container"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <label className="search-form__field" htmlFor="product">
          <input
            name="product"
            type="text"
            placeholder="Поиск"
            ref={productRef}
            id="product"
            className="search-form__input search-form__input-product"
            required
          ></input>
          {/* <span
            className={`form__input-error ${
              !isValid ? `form__input-error_active` : ``
            }`}
          >
            Нужно ввести ключевое слово
          </span> */}
        </label>
        <button type="submit" className={`search-form__submit ${isBtnDisabled ? "search-form__submit_disabled" : ""}`} disabled={isBtnDisabled} ></button>
      </form>
      <Link to="/cart" className="search-form__cart">
        <div className={`search-form__cart-count ${props.cartItems && props.cartItems.length < 1 ? `search-form__cart-count_hidden` : ``}`}>
          <p className="search-form__cart-number">{props.cartItems.length}</p>
        </div>
      </Link>
    </div>
  );
}

export default SearchForm;
