import React from "react";
import "./ProductPage.css";
import SearchForm from "../SearchForm/SearchForm";
import { useParams } from "react-router-dom";
import Swiper from "../Swiper/Swiper";


function ProductPage(props) {
  let { id } = useParams();

  // React.useEffect(() => {
  //   props.getProducts();
  // }, []);

  const product = props.products.find((i) => i.id === Number(id));

  const isInCart = props.cartItems && props.cartItems.some((p) => p.id === Number(id));

  const [isEdited, setIsEdited] = React.useState(false);

  const [formValues, setValues] = React.useState({"name": product.name, "price": product.price, "discount": product.discount, "description": product.description});

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...formValues, [name]: value });
  };

  function handleIsEdited() {
    setIsEdited(!isEdited);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleSaveChanges() {
    handleIsEdited();
  }

  return (
    <div className="product__container">
      <SearchForm cartItems={props.cartItems} history={props.history} submitSearchForm={(v) => props.submitSearchForm(v)} ></SearchForm>
      {props.isAdmin &&
      <div className='product__admin-btns'>
        <button type="button" className="product__delete-btn">Удалить товар</button>
        <button onClick={handleSaveChanges} className="product__edit-btn">
          <p className="product__edit-btn-txt">{isEdited ? 'Сохранить' : 'Изменить товар'}</p>
          <div className={`product__edit-btn-icon ${isEdited ? 'product__edit-btn-icon_save' : 'product__edit-btn-icon_edit'}`}></div>
        </button>
      </div>
      }

      {isEdited ?
        <div className="edited-product">
        <img alt="Фото товара" src={product.mainImageLink} className="edited-product__img"></img>
        <form
          method="get"
          action="index.html"
          name="product"
          className='edited-product__form'
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <label className="edited-product__form-field" htmlFor="product">
            <input name="name"
              type="text"
              required
              onChange={handleChange}
              value={formValues.name}
              placeholder="Название" id="name"
              className="edited-product__form-input edited-product__form-input_name"
            ></input>
          </label>
          <div className="edited-product__form-price">
            <label className="edited-product__form-field" htmlFor="price">
              <input name="price"
                type="text"
                required
                onChange={handleChange}
                value={formValues.price}
                placeholder="Цена" id="price"
                className="edited-product__form-input edited-product__form-input_price"
              ></input>
            </label>
            <label className="edited-product__form-field" htmlFor="discount">
              <input name="discount"
                type="text"
                onChange={handleChange}
                value={formValues.discount}
                placeholder="Скидка в %" id="discount"
                className="edited-product__form-input edited-product__form-input_discount"
              ></input>
            </label>
          </div>
          <label className="edited-product__form-field" htmlFor="description">
            <textarea name="description"
              type="text"
              required
              onChange={handleChange}
              value={formValues.description}
              placeholder="Описание" id="description"
              className="edited-product__form-input edited-product__form-input_description"
            ></textarea>
          </label>
        </form>
      </div>
      :
      <div className="product">
        <Swiper product={product} />
        <p className="product__title">{product.name}</p>
        <div className="product__price-block">
          <div className={`product__old-price ${product.discount && product.discount > 0 && 'product__old-price_visible'}`}>
            <p className="product__old-price-text">{`${product.price} ₽`}</p>
            <div className="product__old-price-line"></div>
          </div>
          <p className="product__price">{`${product.discount ? Math.round(product.price * (1 - (product.discount / 100))) : product.price} ₽`}</p>
        </div>
        <p className="product__description">{product.description}</p>
        {/* <div className="product__counter">
          <p className="product__number product__number-btn">-</p>
          <p className="product__number">1</p>
          <p className="product__number product__number-btn">+</p>
        </div> */}
        <button type="button" disabled={isInCart ? true : false} onClick={() => props.onAdd(product)} className={`product__btn ${isInCart ? "product__btn_disabled" : ""}`}>{isInCart ? "Добавлено" : "В корзину"}</button>
      </div>
      }
    </div>
  );
}

export default ProductPage;