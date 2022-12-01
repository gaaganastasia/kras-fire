import React from "react";
import "./CartItems.css";
import { useRouteMatch } from 'react-router-dom'; 
import CartItem from "../CartItem/CartItem";

function CartItems(props) {
  const { path, url } = useRouteMatch();

  return (
    <div className="cart__items">
      {props.cartItems.length !== 0 &&
          props.cartItems.map((product, i) => {
            return (
              <CartItem
                product={product}
                key={i}
                increaseProductQuantity={() => props.increaseProductQuantity(product.id)}
                reduceProductQuantity={() => props.reduceProductQuantity(product.id)}
                getProductQuantity={() => props.getProductQuantity(product.id)}
                onRemove={() => props.removeProduct(product)}
                cartItems={props.cartItems}
              />
            );
          })}
    </div>
  );
}

export default CartItems;
