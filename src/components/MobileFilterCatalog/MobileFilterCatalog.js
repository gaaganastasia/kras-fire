import React from "react";
import "./MobileFilterCatalog.css";

function MobileFilterCatalog(props) {
  return (
    <div className={`mobile-filter ${props.isOpen ? `mobile-filter_opened` : ``}`}>
      <div className="mobile-filter__overlay"></div>

      <div className="mobile-filter__container">
        <button
          className="mobile-filter__close-btn"
          type="reset"
          onClick={props.changeState}
        ></button>
        <div className="mobile-filter__group">
          <p className="mobile-filter__title">Пиротехника</p>
          <div className="mobile-filter__checkbox-group">
          <label className="mobile-filter__checkbox">
            <input
              type="checkbox"
              className="mobile-filter__checkbox-container"
              onClick={props.handleCat1CheckboxState}
            ></input>
            <span className={`mobile-filter__checkbox-visible ${props.cat1CheckboxState ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
            <p className="mobile-filter__checkbox-text">Дым</p>
          </label>
          <label className="mobile-filter__checkbox">
            <input
              type="checkbox"
              className="mobile-filter__checkbox-container"
              onClick={props.handleCat2CheckboxState}
            ></input>
            <span className={`mobile-filter__checkbox-visible ${props.cat2CheckboxState ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
            <p className="mobile-filter__checkbox-text">Бенгальские свечи</p>
          </label>
          <label className="mobile-filter__checkbox">
            <input
              type="checkbox"
              className="mobile-filter__checkbox-container"
              onClick={props.handleCat3CheckboxState}
            ></input>
            <span className={`mobile-filter__checkbox-visible ${props.cat3CheckboxState ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
            <p className="mobile-filter__checkbox-text">Хлопушки</p>
          </label>
          <label className="mobile-filter__checkbox">
            <input
              type="checkbox"
              className="mobile-filter__checkbox-container"
              onClick={props.handleCat4CheckboxState}
            ></input>
            <span className={`mobile-filter__checkbox-visible ${props.cat4CheckboxState ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
            <p className="mobile-filter__checkbox-text">Батареи салютов</p>
          </label>
          <label className="mobile-filter__checkbox">
            <input
              type="checkbox"
              className="mobile-filter__checkbox-container"
              onClick={props.handleCat5CheckboxState}
            ></input>
            <span className={`mobile-filter__checkbox-visible ${props.cat5CheckboxState ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
            <p className="mobile-filter__checkbox-text">Ракеты</p>
          </label>
          <label className="mobile-filter__checkbox">
            <input
              type="checkbox"
              className="mobile-filter__checkbox-container"
              onClick={props.handleCat6CheckboxState}
            ></input>
            <span className={`mobile-filter__checkbox-visible ${props.cat6CheckboxState ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
            <p className="mobile-filter__checkbox-text">Фонтаны</p>
          </label>
          <label className="mobile-filter__checkbox">
            <input
              type="checkbox"
              className="mobile-filter__checkbox-container"
              onClick={props.handleCat7CheckboxState}
            ></input>
            <span className={`mobile-filter__checkbox-visible ${props.cat7CheckboxState ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
            <p className="mobile-filter__checkbox-text">Летающие фейерверки</p>
          </label>
          <label className="mobile-filter__checkbox">
            <input
              type="checkbox"
              className="mobile-filter__checkbox-container"
              onClick={props.handleCat8CheckboxState}
            ></input>
            <span className={`mobile-filter__checkbox-visible ${props.cat8CheckboxState ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
            <p className="mobile-filter__checkbox-text">Римские свечи</p>
          </label>
          <label className="mobile-filter__checkbox">
            <input
              type="checkbox"
              className="mobile-filter__checkbox-container"
              onClick={props.handleCat9CheckboxState}
            ></input>
            <span className={`mobile-filter__checkbox-visible ${props.cat9CheckboxState ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
            <p className="mobile-filter__checkbox-text">Петарды</p>
          </label>
          <label className="mobile-filter__checkbox">
            <input
              type="checkbox"
              className="mobile-filter__checkbox-container"
              onClick={props.handleCat10CheckboxState}
            ></input>
            <span className={`mobile-filter__checkbox-visible ${props.cat10CheckboxState ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
            <p className="mobile-filter__checkbox-text">Наземные фейерверки</p>
          </label>
          <label className="mobile-filter__checkbox">
            <input
              type="checkbox"
              className="mobile-filter__checkbox-container"
              onClick={props.handleCat11CheckboxState}
            ></input>
            <span className={`mobile-filter__checkbox-visible ${props.cat11CheckboxState ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
            <p className="mobile-filter__checkbox-text">Фестивальные шары</p>
          </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileFilterCatalog;
