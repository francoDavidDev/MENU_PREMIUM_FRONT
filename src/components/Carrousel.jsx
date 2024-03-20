import React from "react";
// import MUI COMPONENTS
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
// import SLIDER
import Slider from "react-slick";
// import Slider Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Data
import { BANNERS } from "../constants/specials";
import { PRODUCTS } from "../constants/products";

const Hero = ({ value }) => {
 // Función para seleccionar aleatoriamente n elementos de un arreglo
 function selectRandomItems(arr, n) {
  const shuffled = arr.sort(() => 0.1 - Math.random());
  return shuffled.slice(0, n);
}
// Seleccionar 3 elementos aleatorios del arreglo PRODUCTS
const randomProducts = selectRandomItems(PRODUCTS, 3);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box sx={{ margin: "auto" }}>
      <Box sx={{ mt: 2 }}>
        <Slider {...settings}>
          {/* PRODUCT */}
          {value === "coffees" || value === "salty" || value === "sweets"
            ?  randomProducts.map((item, index) => {
              return value === item.tag  ? (
                <Card key={index} sx={{ width: 1, borderRadius: 5 }}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt="/"
                    height={170}
                  />
                </Card>
              ) : null;
            })
            /* CARROUSEL SPECIAL */
            : BANNERS.map((item, index) => {
                return value === item.category &&
                  item.tag === "bannerCarrousel" ? (
                  <Card key={index} sx={{ width: 1, borderRadius: 5 }}>
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt="/"
                      height={170}
                    />
                  </Card>
                ) : null;
              })}
        </Slider>
      </Box>
    </Box>
  );
};

export default Hero;
