import React, { Component } from "react";
import "./App.css";
import Header from '../Header/Header';
import SearchForm from "../SearchForm/SearchForm";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Catalog from "../Catalog/Catalog";
import Cart from "../Cart/Cart";
import ProductPage from "../ProductPage/ProductPage";
import {  Route, Switch, useHistory } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { fireworks } from '../../utils/products';
import MobileFilterCatalog from "../MobileFilterCatalog/MobileFilterCatalog";
import ConfirmationPage from "../ConfirmationPage/ConfirmationPage";


function App() {
  const history = useHistory();

  const [isNavOpen, setNavState] = React.useState(false);
  const changeNavState = () => {
    setNavState(!isNavOpen);
  };

  const [isMobileFilterOpen, setMobileFilterState] = React.useState(false);
  const changeMobileFilterState = () => {
    setMobileFilterState(!isMobileFilterOpen);
  };

  const [currentUser, setCurrentUser] = React.useState({
    cart: []
  });

  const [products, setProducts] = React.useState(fireworks);

  function getProducts() {
    setProducts(fireworks);
    
  }

  const [filters, setFilters] = React.useState([]);

  const [fireworksCheckboxState, setFireworksCheckboxState] = React.useState(false);
  const [firecrackersCheckboxState, setFirecrackersCheckboxState] = React.useState(false);
  const [sparklersCheckboxState, setSparklersCheckboxState] = React.useState(false);
  
  React.useEffect(() => {
    handleFilters();
  }, [fireworksCheckboxState, firecrackersCheckboxState, sparklersCheckboxState]);

  const handleFilters = () => {
    let f = [];
    if (fireworksCheckboxState) {
      f.push("Фейерверк")
    } if (firecrackersCheckboxState) {
      f.push("Петарды")
    } if (sparklersCheckboxState) {
      f.push("Бенгальские огни")
    }
    setFilters(f);
  }

  function handleFireworksCheckboxState () {
    setFireworksCheckboxState(!fireworksCheckboxState);
  }
  
  function handleFirecrackersCheckboxState () {
    setFirecrackersCheckboxState(!firecrackersCheckboxState);
  }

  function handleSparklersCheckboxState () {
    setSparklersCheckboxState(!sparklersCheckboxState);
  }

  const [cartItems, setCartItems] = React.useState([]);

  function getProductState(product) {
    const isInCart = cartItems.some(
      (p) =>
        p.id === product.id
    );

    return isInCart;
  }

  const [cost, setCost] = React.useState(0);

  function handleCost() {
    let k = 0;

    cartItems.forEach((i) => {
      k += i.price * i.quantity;
    });

    setCost(k)

  }

  function addProduct(product) {
    const p = product;
    p.quantity = 1;
    setCartItems([p, ...cartItems])
    setCost(cost + product.price * product.quantity)
  }

  function removeProduct(product) {
    setCartItems(
      cartItems.filter(
        (p) =>
          p.id !== product.id
      )
    );

    setCost(cost - product.price * product.quantity)
  }

  function increaseProductQuantity(id) {
    cartItems[cartItems.findIndex((i) => i.id === id)].quantity += 1;
    handleCost()
  }

  function reduceProductQuantity(id) {
    cartItems[cartItems.findIndex((i) => i.id === id)].quantity -= 1;
    handleCost()
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header
          history={history}
          changeNavState={changeNavState}

        />
        <Switch>
          <Route exact path="/">
            <ScrollToTop />
            <Main 
              getProducts={getProducts}
              products={products}
              cartItems={cartItems}
              history={history}
            />
          </Route>
          <Route exact path="/catalog">
            <ScrollToTop />
            <Catalog 
              getProducts={getProducts}
              products={products}
              filters={filters}
              //getFilters={getFilters}
              fireworksCheckboxState={fireworksCheckboxState}
              firecrackersCheckboxState={firecrackersCheckboxState}
              sparklersCheckboxState={sparklersCheckboxState}
              handleFireworksCheckboxState={handleFireworksCheckboxState}
              handleFirecrackersCheckboxState={handleFirecrackersCheckboxState}
              handleSparklersCheckboxState={handleSparklersCheckboxState}
              getProductState={getProductState}
              cartItems={cartItems}
              addProduct={(product) => addProduct(product)}
              history={history}
              changeMobileFilterState={changeMobileFilterState}
            />
          </Route>
          <Route path="/cart">
            <ScrollToTop />
            <Cart history={history}
            getProducts={getProducts}
            products={products}
            cartItems={cartItems}
            increaseProductQuantity={(id) => increaseProductQuantity(id)} 
            reduceProductQuantity={(id) => reduceProductQuantity(id)}
            removeProduct={(product) => removeProduct(product)}
            cost={cost}
            />
          </Route>
          <Route path="/confirmation">
            <ScrollToTop />
            <ConfirmationPage history={history} />
          </Route>
          <Route path="/catalog/:id">
            <ScrollToTop />
            <ProductPage 
              getProducts={getProducts}
              products={products}
              cartItems={cartItems}
              history={history}
              onAdd={(product) => addProduct(product)}
            />
          </Route>
        </Switch>

        <Navigation
            isOpen={isNavOpen}
            changeState={changeNavState}
          />

        <MobileFilterCatalog 
          isOpen={isMobileFilterOpen}
          changeState={changeMobileFilterState}
          fireworksCheckboxState={fireworksCheckboxState}
          firecrackersCheckboxState={firecrackersCheckboxState}
          sparklersCheckboxState={sparklersCheckboxState}
          handleFireworksCheckboxState={handleFireworksCheckboxState}
          handleFirecrackersCheckboxState={handleFirecrackersCheckboxState}
          handleSparklersCheckboxState={handleSparklersCheckboxState}
        />

        <Footer 
          history={history}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
