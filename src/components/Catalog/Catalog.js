import React from "react";
import "./Catalog.css";
import FilterCatalog from "../FilterCatalog/FilterCatalog";
import SearchForm from "../SearchForm/SearchForm";
import ProductsList from "../ProductsList/ProductsList";
import { Link } from 'react-router-dom'; 

function Catalog(props) {
  React.useEffect(() => {
    props.getProducts();
  }, []);

  // const [searchedProducts, setSearchedProducts] = React.useState(props.products);

  // function handleSearchedProducts(products) {
  //   setSearchedProducts(products);
  // }

  return (
    <section className="catalog">
      <FilterCatalog
        cat1CheckboxState={props.cat1CheckboxState}
        handleCat1CheckboxState={props.handleCat1CheckboxState}
        cat2CheckboxState={props.cat2CheckboxState}
        handleCat2CheckboxState={props.handleCat2CheckboxState}
        cat3CheckboxState={props.cat3CheckboxState}
        handleCat3CheckboxState={props.handleCat3CheckboxState}
        cat4CheckboxState={props.cat4CheckboxState}
        handleCat4CheckboxState={props.handleCat4CheckboxState}
        cat5CheckboxState={props.cat5CheckboxState}
        handleCat5CheckboxState={props.handleCat5CheckboxState}
        cat6CheckboxState={props.cat6CheckboxState}
        handleCat6CheckboxState={props.handleCat6CheckboxState}
        cat7CheckboxState={props.cat7CheckboxState}
        handleCat7CheckboxState={props.handleCat7CheckboxState}
        cat8CheckboxState={props.cat8CheckboxState}
        handleCat8CheckboxState={props.handleCat8CheckboxState}
        cat9CheckboxState={props.cat9CheckboxState}
        handleCat9CheckboxState={props.handleCat9CheckboxState}
        cat10CheckboxState={props.cat10CheckboxState}
        handleCat10CheckboxState={props.handleCat10CheckboxState}
        cat11CheckboxState={props.cat11CheckboxState}
        handleCat11CheckboxState={props.handleCat11CheckboxState}
      />
      <div className="catalog__container">
        <SearchForm
          products={props.products}
          getProducts={props.getProducts}
          searchedProducts={props.searchedProducts}
          submitSearchForm={(v) => props.submitSearchForm(v)}
          cartItems={props.cartItems}
          history={props.history}
          setSearchedProducts={props.handleSearchedProducts} />
        <div className="catalog__title" onClick={props.changeMobileFilterState}>
          <p className="catalog__title-text">Пиротехника</p>
          <div className="catalog__title-icon"></div>
        </div>
        <div className="catalog__link-container">
          <Link to='add-product' className={`catalog__add-product-link ${props.isAdmin ? 'catalog__add-product-link_visible' : ''}`}>Добавить товар</Link>
          <ProductsList 
            products={props.searchedProducts}
            getProducts={props.getProducts}
            filters={props.filters}
            getProductState={props.getProductState}
            cartItems={props.cartItems}
            addProduct={(product) => props.addProduct(product)}
            setProductPageId={props.setProductPageId}
            submitSearchForm={(v) => props.submitSearchForm(v)}
          ></ProductsList>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
