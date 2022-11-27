import React from "react";
import "./AddProductPage.css";
import { Link, Redirect, useRouteMatch } from "react-router-dom";

function AddProductPage(props) {
  const { path, url } = useRouteMatch();

  const nameRef = React.useRef();
  const partNumberRef = React.useRef();
  const categoryRef = React.useRef();
  const priceRef = React.useRef();
  const discountRef = React.useRef();
  const descriptionRef = React.useRef();
  const videoRef = React.useRef();
  const mainImgRef = React.useRef();
  const image1Ref = React.useRef();
  const image2Ref = React.useRef();
  const image3Ref = React.useRef();
  const image4Ref = React.useRef();

  const [isBtnDisabled, setIsBtnDisabled] = React.useState(true);

  function goBack() {
    props.history.goBack();
  }

  function handleChange(e) {
    setIsBtnDisabled(!(nameRef.current.value && 
      partNumberRef.current.value && 
      categoryRef.current.value && 
      priceRef.current.value && 
      descriptionRef.current.value && 
      videoRef.current.value && 
      mainImgRef.current.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="add-product">
      <div className='add-product__header add-product__header_underlined'>
        <p className='add-product__title'>Добавить товар</p>
        <div className="add-product__close-icon" onClick={goBack}></div>
      </div>
      <form
        method="get"
        action="index.html"
        name="new-product"
        className='add-product__form'
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        onChange={handleChange}
        id="new-product"
      >
        <label className="add-product__form-field" htmlFor="new-product">
          <input name="new-product"
            type="text"
            required
            ref={nameRef}
            placeholder="Название" id="name"
            className="add-product__form-input add-product__form-input_phone"
          ></input>
        </label>
        <label className="add-product__form-field" htmlFor="new-product">
          <input name="new-product"
            type="text"
            required
            ref={partNumberRef}
            placeholder="Артикул" id="part-number"
            className="add-product__form-input add-product__form-input_phone"
          ></input>
        </label>
        <label className="add-product__form-field" htmlFor="new-product">
          <input name="new-product"
            type="text"
            ref={categoryRef}
            required
            placeholder="Категория" id="category"
            className="add-product__form-input add-product__form-input_phone"
          ></input>
        </label>
        <div className="add-product__price">
          <label className="add-product__form-field" htmlFor="new-product">
            <input name="new-product"
              type="text"
              required
              ref={priceRef}
              placeholder="Цена" id="price"
              className="add-product__form-input add-product__form-input_price"
            ></input>
          </label>
          <label className="add-product__form-field" htmlFor="new-product">
            <input name="new-product"
              type="text"
              ref={discountRef}
              placeholder="Скидка в %" id="discount"
              className="add-product__form-input add-product__form-input_discount"
            ></input>
          </label>
        </div>
        <label className="add-product__form-field" htmlFor="new-product">
          <input name="new-product"
            required
            type="text"
            ref={videoRef}
            placeholder="Ссылка на видео" id="video"
            className="add-product__form-input add-product__form-input_phone"
          ></input>
        </label>
        <label className="add-product__form-field add-product__form-field_description" htmlFor="new-product">
          <textarea name="new-product"
            type="text"
            required
            ref={descriptionRef}
            placeholder="Описание" id="description"
            className="add-product__form-input add-product__form-input_description"
          ></textarea>
        </label>
        <div className="add-product__images">
          {/* <button type="button" className="add-product__images-btn"></button> */}
          <label className="add-product__form-field" htmlFor="new-product">
            <input name="new-product"
              type="text"
              required
              ref={mainImgRef}
              placeholder="Ссылка на фото" id="main-image"
              className="add-product__form-input add-product__form-input_phone"
            ></input>
          </label>
          <label className="add-product__form-field" htmlFor="new-product">
            <input name="new-product"
              type="text"
              ref={image1Ref}
              placeholder="Ссылка на фото" id="image-1"
              className="add-product__form-input add-product__form-input_phone"
            ></input>
          </label>
          <label className="add-product__form-field" htmlFor="new-product">
            <input name="new-product"
              type="text"
              ref={image2Ref}
              placeholder="Ссылка на фото" id="image-2"
              className="add-product__form-input add-product__form-input_phone"
            ></input>
          </label>
          <label className="add-product__form-field" htmlFor="new-product">
            <input name="new-product"
              type="text"
              ref={image3Ref}
              placeholder="Ссылка на фото" id="image-3"
              className="add-product__form-input add-product__form-input_phone"
            ></input>
          </label>
          <label className="add-product__form-field" htmlFor="new-product">
            <input name="new-product"
              type="text"
              ref={image4Ref}
              placeholder="Ссылка на фото" id="image-4"
              className="add-product__form-input add-product__form-input_phone"
            ></input>
          </label>
        </div>
        <button type="submit" disabled={isBtnDisabled} className={`add-product__form-submit ${isBtnDisabled ? 'add-product__form-submit_disabled' : ''}`}>Сохранить</button>
      </form>
    </section>
  );
}

export default AddProductPage;
