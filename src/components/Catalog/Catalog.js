import React from "react";
import "./Catalog.css";
import FilterCatalog from "../FilterCatalog/FilterCatalog";
import SearchForm from "../SearchForm/SearchForm";
import ProductsList from "../ProductsList/ProductsList";

function Catalog(props) {
  React.useEffect(() => {
    props.getProducts();
  }, []);

  const [searchedProducts, setSearchedProducts] = React.useState(props.products);

  function handleSearchedProducts(products) {
    setSearchedProducts(products);
  }

  return (
    <section className="catalog">
      <FilterCatalog
        fireworksCheckboxState={props.fireworksCheckboxState}
        firecrackersCheckboxState={props.firecrackersCheckboxState}
        sparklersCheckboxState={props.sparklersCheckboxState}
        handleFireworksCheckboxState={props.handleFireworksCheckboxState}
        handleFirecrackersCheckboxState={props.handleFirecrackersCheckboxState}
        handleSparklersCheckboxState={props.handleSparklersCheckboxState}
      />
      <div className="catalog__container">
        <SearchForm
          products={props.products}
          getProducts={props.getProducts}
          searchedProducts={searchedProducts}
          cartItems={props.cartItems}
          history={props.history}
          setSearchedProducts={handleSearchedProducts} />
        <div className="catalog__title" onClick={props.changeMobileFilterState}>
          <p className="catalog__title-text">Пиротехника</p>
          <div className="catalog__title-icon"></div>
        </div>
        <ProductsList 
          products={searchedProducts}
          getProducts={props.getProducts}
          filters={props.filters}
          getProductState={props.getProductState}
          cartItems={props.cartItems}
          addProduct={(product) => props.addProduct(product)}
          setProductPageId={props.setProductPageId}
        ></ProductsList>
      </div>
    </section>
  );
}

export default Catalog;
