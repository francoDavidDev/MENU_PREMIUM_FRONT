import React from "react";

import { PRODUCTS } from "../../constants/products";
import coffee from "../../assets/img/backgrounds/granos-de-cafe.jpg";

import ListProduct from "../../components/ListProduct";

const Coffes = () => {
  return (
    <>
      <ListProduct
        background={coffee}
        obj={PRODUCTS}
        title={"CAFES"}
        subtitle={"Cafes negros"}
        tag={'coffees'}
      />


    </>
  );
};

export default Coffes;
