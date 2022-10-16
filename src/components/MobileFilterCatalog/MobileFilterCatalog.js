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
              onClick={props.handleFireworksCheckboxState}
            ></input>
            <span className={`mobile-filter__checkbox-visible ${props.fireworksCheckboxState ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
            <p className="mobile-filter__checkbox-text">Фейерверки</p>
          </label>
          <label className="mobile-filter__checkbox">
            <input
              type="checkbox"
              className="mobile-filter__checkbox-container"
              onClick={props.handleFirecrackersCheckboxState}
            ></input>
            <span className={`mobile-filter__checkbox-visible ${props.firecrackersCheckboxState ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
            <p className="mobile-filter__checkbox-text">Петарды</p>
          </label>
          <label className="mobile-filter__checkbox">
            <input
              type="checkbox"
              className="mobile-filter__checkbox-container"
              onClick={props.handleSparklersCheckboxState}
            ></input>
            <span className={`mobile-filter__checkbox-visible ${props.sparklersCheckboxState ? `mobile-filter__checkbox-visible_active` : ``}`}></span>
            <p className="mobile-filter__checkbox-text">Бенгальские огни</p>
          </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileFilterCatalog;
