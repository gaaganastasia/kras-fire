import React from "react";
import "./FilterCatalog.css";

function FilterCatalog(props) {
  return (
    <div className="filter">
      <p className="filter__title">Пиротехника</p>
      <div className="filter__checkbox-group">
      <label className="filter__checkbox">
        <input
          type="checkbox"
          className="filter__checkbox-container"
          onClick={props.handleCat1CheckboxState}
        ></input>
        <span className={`filter__checkbox-visible ${props.cat1CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span>
        <p className="filter__checkbox-text">Дым</p>
      </label>
      <label className="filter__checkbox">
        <input
          type="checkbox"
          className="filter__checkbox-container"
          onClick={props.handleCat2CheckboxState}
        ></input>
        <span className={`filter__checkbox-visible ${props.cat2CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span>
        <p className="filter__checkbox-text">Бенгальские свечи</p>
      </label>
      <label className="filter__checkbox">
        <input
          type="checkbox"
          className="filter__checkbox-container"
          onClick={props.handleCat3CheckboxState}
        ></input>
        <span className={`filter__checkbox-visible ${props.cat3CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span>
        <p className="filter__checkbox-text">Хлопушки</p>
      </label>
      <label className="filter__checkbox">
        <input
          type="checkbox"
          className="filter__checkbox-container"
          onClick={props.handleCat4CheckboxState}
        ></input>
        <span className={`filter__checkbox-visible ${props.cat4CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span>
        <p className="filter__checkbox-text">Батареи салютов</p>
      </label>
      <label className="filter__checkbox">
        <input
          type="checkbox"
          className="filter__checkbox-container"
          onClick={props.handleCat5CheckboxState}
        ></input>
        <span className={`filter__checkbox-visible ${props.cat5CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span>
        <p className="filter__checkbox-text">Ракеты</p>
      </label>
      <label className="filter__checkbox">
        <input
          type="checkbox"
          className="filter__checkbox-container"
          onClick={props.handleCat6CheckboxState}
        ></input>
        <span className={`filter__checkbox-visible ${props.cat6CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span>
        <p className="filter__checkbox-text">Фонтаны</p>
      </label>
      <label className="filter__checkbox">
        <input
          type="checkbox"
          className="filter__checkbox-container"
          onClick={props.handleCat7CheckboxState}
        ></input>
        <span className={`filter__checkbox-visible ${props.cat7CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span>
        <p className="filter__checkbox-text">Летающие фейерверки</p>
      </label>
      <label className="filter__checkbox">
        <input
          type="checkbox"
          className="filter__checkbox-container"
          onClick={props.handleCat8CheckboxState}
        ></input>
        <span className={`filter__checkbox-visible ${props.cat8CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span>
        <p className="filter__checkbox-text">Римские свечи</p>
      </label>
      <label className="filter__checkbox">
        <input
          type="checkbox"
          className="filter__checkbox-container"
          onClick={props.handleCat9CheckboxState}
        ></input>
        <span className={`filter__checkbox-visible ${props.cat9CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span>
        <p className="filter__checkbox-text">Петарды</p>
      </label>
      <label className="filter__checkbox">
        <input
          type="checkbox"
          className="filter__checkbox-container"
          onClick={props.handleCat10CheckboxState}
        ></input>
        <span className={`filter__checkbox-visible ${props.cat10CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span>
        <p className="filter__checkbox-text">Наземные фейерверки</p>
      </label>
      <label className="filter__checkbox">
        <input
          type="checkbox"
          className="filter__checkbox-container"
          onClick={props.handleCat11CheckboxState}
        ></input>
        <span className={`filter__checkbox-visible ${props.cat11CheckboxState ? `filter__checkbox-visible_active` : ``}`}></span>
        <p className="filter__checkbox-text">Фестивальные шары</p>
      </label>
      </div>
    </div>
  );
}

export default FilterCatalog;
