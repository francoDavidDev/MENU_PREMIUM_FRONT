import React from "react";

import { PRODUCTS } from "../../constants/products";
import ListProduct from "../../components/ListProduct";

const Salty = () => {
  return (
    <>
      <ListProduct
        obj={PRODUCTS}
        title={"COMIDAS"}
        subtitle={"APERITIVOS SALADOS"}
        tag={'saltys'}
      />
    </>
  
  );
};

export default Salty;
