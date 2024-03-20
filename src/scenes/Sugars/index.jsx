import React from "react";

import coffee from "../../assets/img/backgrounds/granos-de-cafe.jpg";
import { PRODUCTS } from "../../constants/products";
import ListProduct from "../../components/ListProduct";

const Sugars = () => {
  return (
    <>
      <ListProduct
        background={coffee}
        obj={PRODUCTS}
        title={"COMIDAS"}
        subtitle={"APERITIVOS DULCES"}
        tag={'sugars'}
      />
    </>
  );
};

export default Sugars;
