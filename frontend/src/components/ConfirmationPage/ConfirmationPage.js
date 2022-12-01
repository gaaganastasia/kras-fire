import React from "react";
import "./ConfirmationPage.css";
import { useRouteMatch } from 'react-router-dom'; 

function ConfirmationPage(props) {
  const { path, url } = useRouteMatch();

  function goBack() {
    props.history.goBack();
  }

  return (
    <div className="confirmation">
      <div className="confirmation__header">
        <p className="confirmation__title"></p>
        <div className="confirmation__close-icon" onClick={goBack}></div>
      </div>
      <p className="confirmation__message">Ваш заказ принят,<br/>мы скоро с вами свяжемся!</p>
      
    </div>
  );
}

export default ConfirmationPage;
