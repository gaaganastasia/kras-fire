import React from "react";
import "./ProductsList.css";
import ProductCard from "../ProductCard/ProductCard";


function ProductsList(props) {
  // React.useEffect(() => {
  //   props.getProducts();
  // }, []);
  
  return (
    <div className="catalog__items">
      {props.filters && props.filters.length > 0
        ? props.products.length !== 0 &&
          props.products.map((product, i) => {
            if (
              props.filters.includes(product.category)
            ) {
              return (
                <ProductCard
                  product={product}
                  key={i}
                  getProductState={props.getProductState}
                  submitSearchForm={(v) => props.submitSearchForm(v)}
                  cartItems={props.cartItems}
                  onAdd={() => props.addProduct(product)}
                  setProductPageId={() => props.setProductPageId(product.id)}
                  linkPath={`/catalog/${product.id}`}
                />
              );
            }
          })
        : props.products && props.products.length !== 0 &&
          props.products.map((product, i) => {
            return (
              <ProductCard
                product={product}
                key={i}
                getProductState={props.getProductState}
                submitSearchForm={(v) => props.submitSearchForm(v)}
                cartItems={props.cartItems}
                onAdd={() => props.addProduct(product)}
                setProductPageId={() => props.setProductPageId(product.id)}
                linkPath={`/catalog/${product.id}`}
              />
            );
          })}
    </div>
  );
}

export default ProductsList;