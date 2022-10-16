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
          onClick={props.handleFireworksCheckboxState}
        ></input>
        <span className={`filter__checkbox-visible ${props.fireworksCheckboxState ? `filter__checkbox-visible_active` : ``}`}></span>
        <p className="filter__checkbox-text">Фейерверки</p>
      </label>
      <label className="filter__checkbox">
        <input
          type="checkbox"
          className="filter__checkbox-container"
          onClick={props.handleFirecrackersCheckboxState}
        ></input>
        <span className={`filter__checkbox-visible ${props.firecrackersCheckboxState ? `filter__checkbox-visible_active` : ``}`}></span>
        <p className="filter__checkbox-text">Петарды</p>
      </label>
      <label className="filter__checkbox">
        <input
          type="checkbox"
          className="filter__checkbox-container"
          onClick={props.handleSparklersCheckboxState}
        ></input>
        <span className={`filter__checkbox-visible ${props.sparklersCheckboxState ? `filter__checkbox-visible_active` : ``}`}></span>
        <p className="filter__checkbox-text">Бенгальские огни</p>
      </label>
      </div>
    </div>
  );
}

export default FilterCatalog;
