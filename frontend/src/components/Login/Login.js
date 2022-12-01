import React from "react";
import "./Login.css";
import { Link, Redirect, useRouteMatch } from "react-router-dom";

function Login(props) {
  const { path, url } = useRouteMatch();

  const passwordRef = React.useRef('');
  const [isBtnDisabled, setIsBtnDisabled] = React.useState(true);

  function handleChange(e) {
    setIsBtnDisabled(!e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!passwordRef.current.value) {
      return;
    }
    props.onLogin(passwordRef.current.value);
  }

  return (
    <section className="login">
      <div className='login__header login__header_underlined'>
        <p className='login__title'>Введите пароль</p>
      </div>
      <form
        method="get"
        action="index.html"
        name="password"
        className='login__form'
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        onChange={handleChange}
      >
        <label className="login__form-field" htmlFor="password">
          <input name="password"
            type="password"
            ref={passwordRef}
            placeholder="Пароль" id="password"
            className="login__form-input login__form-input_phone"
          ></input>
        </label>
        <button type="submit" disabled={isBtnDisabled} className={`login__form-submit ${isBtnDisabled ? 'login__form-submit_disabled' : ''}`}>Войти</button>
      </form>
    </section>
  );
}

export default Login;
