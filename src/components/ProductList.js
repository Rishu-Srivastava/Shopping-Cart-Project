import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return props.productList.length > 0 ? (
    props.productList.map((product, index) => {
      return (
        <Product
          product={product}
          key={index}
          incrementQuantity={props.incrementQuantity}
          decrementQuantity={props.decrementQuantity}
          index={index}
          removeItem={props.removeItem}
        />
      );
    })
  ) : (
    <h1>No Products Added In The Cart</h1>
  );
}
