import React, { Component, useState } from "react";
import "./App.css";
import Header from '../Header/Header';
import SearchForm from "../SearchForm/SearchForm";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Catalog from "../Catalog/Catalog";
import Cart from "../Cart/Cart";
import ProductPage from "../ProductPage/ProductPage";
import {  Route, Switch, useHistory, Redirect } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { fireworks } from '../../utils/products';
import MobileFilterCatalog from "../MobileFilterCatalog/MobileFilterCatalog";
import ConfirmationPage from "../ConfirmationPage/ConfirmationPage";
import Login from "../Login/Login";
import AddProductPage from "../AddProductPage/AddProductPage";


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

  const [cat1CheckboxState, setCat1CheckboxState] = React.useState(false);
  const [cat2CheckboxState, setCat2CheckboxState] = React.useState(false);
  const [cat3CheckboxState, setCat3CheckboxState] = React.useState(false);
  const [cat4CheckboxState, setCat4CheckboxState] = React.useState(false);
  const [cat5CheckboxState, setCat5CheckboxState] = React.useState(false);
  const [cat6CheckboxState, setCat6CheckboxState] = React.useState(false);
  const [cat7CheckboxState, setCat7CheckboxState] = React.useState(false);
  const [cat8CheckboxState, setCat8CheckboxState] = React.useState(false);
  const [cat9CheckboxState, setCat9CheckboxState] = React.useState(false);
  const [cat10CheckboxState, setCat10CheckboxState] = React.useState(false);
  const [cat11CheckboxState, setCat11CheckboxState] = React.useState(false);
  
  React.useEffect(() => {
    handleFilters();
  }, [cat1CheckboxState, 
    cat2CheckboxState,
    cat3CheckboxState,
    cat4CheckboxState,
    cat5CheckboxState,
    cat6CheckboxState,
    cat7CheckboxState,
    cat8CheckboxState,
    cat9CheckboxState,
    cat10CheckboxState,
    cat11CheckboxState]);

  const handleFilters = () => {
    let f = [];
    if (cat1CheckboxState) {
      f.push("Дым")
    } if (cat2CheckboxState) {
      f.push("Бенгальские свечи")
    } if (cat3CheckboxState) {
      f.push("Хлопушки")
    } if (cat4CheckboxState) {
      f.push("Батареи салютов")
    } if (cat5CheckboxState) {
      f.push("Ракеты")
    } if (cat6CheckboxState) {
      f.push("Фонтаны")
    } if (cat7CheckboxState) {
      f.push("Летающие фейерверки")
    } if (cat8CheckboxState) {
      f.push("Римские свечи")
    } if (cat9CheckboxState) {
      f.push("Петарды")
    } if (cat10CheckboxState) {
      f.push("Наземные фейерверки")
    } if (cat11CheckboxState) {
      f.push("Фестивальные шары")
    } 
    setFilters(f);
  }

  function handleCat1CheckboxState () {
    setCat1CheckboxState(!cat1CheckboxState);
  }

  function handleCat2CheckboxState () {
    setCat2CheckboxState(!cat2CheckboxState);
  }

  function handleCat3CheckboxState () {
    setCat3CheckboxState(!cat3CheckboxState);
  }

  function handleCat4CheckboxState () {
    setCat4CheckboxState(!cat4CheckboxState);
  }

  function handleCat5CheckboxState () {
    setCat5CheckboxState(!cat5CheckboxState);
  }

  function handleCat6CheckboxState () {
    setCat6CheckboxState(!cat6CheckboxState);
  }

  function handleCat7CheckboxState () {
    setCat7CheckboxState(!cat7CheckboxState);
  }

  function handleCat8CheckboxState () {
    setCat8CheckboxState(!cat8CheckboxState);
  }

  function handleCat9CheckboxState () {
    setCat9CheckboxState(!cat9CheckboxState);
  }

  function handleCat10CheckboxState () {
    setCat10CheckboxState(!cat10CheckboxState);
  }

  function handleCat11CheckboxState () {
    setCat11CheckboxState(!cat11CheckboxState);
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
      i.discount ?
      k += i.price * (1 - (i.discount / 100)) * i.quantity
      :
      k += i.price * i.quantity
    });

    setCost(k)

  }

  function addProduct(product) {
    const p = product;
    p.quantity = 1;
    setCartItems([p, ...cartItems])
    product.discount ?
    setCost(cost + product.price * (1 - (product.discount / 100)) * product.quantity)
    :
    setCost(cost + product.price * product.quantity);
  }

  function removeProduct(product) {
    setCartItems(
      cartItems.filter(
        (p) =>
          p.id !== product.id
      )
    );

    product.discount ?
    setCost(cost - product.price * (1 - (product.discount / 100)) * product.quantity)
    :
    setCost(cost - product.price * product.quantity);
  }

  function increaseProductQuantity(id) {
    cartItems[cartItems.findIndex((i) => i.id === id)].quantity += 1;
    handleCost()
  }

  function reduceProductQuantity(id) {
    cartItems[cartItems.findIndex((i) => i.id === id)].quantity -= 1;
    handleCost()
  }

  const [searchedProducts, setSearchedProducts] = React.useState(products);

  function handleSearchedProducts(products) {
    setSearchedProducts(products);
  }

  function submitSearchForm(v) {
    history.push("/catalog");
    if (!v.current.value || v.current.value === " ") {
    } else {
      let p = products.filter(
        (product) =>
          product.name.toLowerCase().indexOf(v.current.value.toLowerCase()) !== -1 ||
          product.category.toLowerCase().indexOf(v.current.value.toLowerCase()) !== -1
      );


      //localStorage.setItem('products', JSON.stringify(products));

      setSearchedProducts(p);
      if (p.length === 0) {
      }
      //console.log(searchedProducts);
    }
  }

  ////////////////admin

  const [isAdmin, setIsAdmin] = useState(false);

  function deleteProduct(id) {}

  function editPorduct(id, values) {}

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
              submitSearchForm={(v) => submitSearchForm(v)}
            />
          </Route>
          <Route exact path="/catalog">
            <ScrollToTop />
            <Catalog 
              isAdmin={isAdmin}
              searchedProducts={searchedProducts}
              handleSearchedProducts={handleSearchedProducts}
              getProducts={getProducts}
              products={products}
              filters={filters}
              //getFilters={getFilters}
              cat1CheckboxState={cat1CheckboxState}
              handleCat1CheckboxState={handleCat1CheckboxState}
              cat2CheckboxState={cat2CheckboxState}
              handleCat2CheckboxState={handleCat2CheckboxState}
              cat3CheckboxState={cat3CheckboxState}
              handleCat3CheckboxState={handleCat3CheckboxState}
              cat4CheckboxState={cat4CheckboxState}
              handleCat4CheckboxState={handleCat4CheckboxState}
              cat5CheckboxState={cat5CheckboxState}
              handleCat5CheckboxState={handleCat5CheckboxState}
              cat6CheckboxState={cat6CheckboxState}
              handleCat6CheckboxState={handleCat6CheckboxState}
              cat7CheckboxState={cat7CheckboxState}
              handleCat7CheckboxState={handleCat7CheckboxState}
              cat8CheckboxState={cat8CheckboxState}
              handleCat8CheckboxState={handleCat8CheckboxState}
              cat9CheckboxState={cat9CheckboxState}
              handleCat9CheckboxState={handleCat9CheckboxState}
              cat10CheckboxState={cat10CheckboxState}
              handleCat10CheckboxState={handleCat10CheckboxState}
              cat11CheckboxState={cat11CheckboxState}
              handleCat11CheckboxState={handleCat11CheckboxState}
              getProductState={getProductState}
              cartItems={cartItems}
              addProduct={(product) => addProduct(product)}
              submitSearchForm={(v) => submitSearchForm(v)}
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
              isAdmin={isAdmin}
            />
          </Route>
          <Route path="/login">
            <ScrollToTop />
            <Login isAdmin={isAdmin} setIsAdmin={setIsAdmin} history={history} />
          </Route>

          <Route path="/add-product">
            <ScrollToTop />
            {isAdmin ? <AddProductPage history={history} /> : <Redirect to="catalog" />}
          </Route>
          

        </Switch>

        <Navigation
            isOpen={isNavOpen}
            changeState={changeNavState}
          />

        <MobileFilterCatalog 
          isOpen={isMobileFilterOpen}
          changeState={changeMobileFilterState}
          cat1CheckboxState={cat1CheckboxState}
          handleCat1CheckboxState={handleCat1CheckboxState}
          cat2CheckboxState={cat2CheckboxState}
          handleCat2CheckboxState={handleCat2CheckboxState}
          cat3CheckboxState={cat3CheckboxState}
          handleCat3CheckboxState={handleCat3CheckboxState}
          cat4CheckboxState={cat4CheckboxState}
          handleCat4CheckboxState={handleCat4CheckboxState}
          cat5CheckboxState={cat5CheckboxState}
          handleCat5CheckboxState={handleCat5CheckboxState}
          cat6CheckboxState={cat6CheckboxState}
          handleCat6CheckboxState={handleCat6CheckboxState}
          cat7CheckboxState={cat7CheckboxState}
          handleCat7CheckboxState={handleCat7CheckboxState}
          cat8CheckboxState={cat8CheckboxState}
          handleCat8CheckboxState={handleCat8CheckboxState}
          cat9CheckboxState={cat9CheckboxState}
          handleCat9CheckboxState={handleCat9CheckboxState}
          cat10CheckboxState={cat10CheckboxState}
          handleCat10CheckboxState={handleCat10CheckboxState}
          cat11CheckboxState={cat11CheckboxState}
          handleCat11CheckboxState={handleCat11CheckboxState}
        />

        <Footer 
          history={history}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
