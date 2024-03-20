import React from "react";
// import MUI COMPONENTS
import { Box, Typography } from "@mui/material";
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
import FlexCenter from "./muiComponents/FlexCenter";

const Hero = ({ value }) => {
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
        {value === "coffees" || value === "salty" || value === "sweets" ? (
          <FlexCenter>
            <Typography
              variant="h2"
              sx={{
                fontSize: "15px",
                fontWeight: "bolder",
                bgcolor: "red",
                px: 2,
                py: 1,
                borderRadius: 5,
                position: "relative",
                top: 20,
                zIndex: 2,
              }}
            >
              ¡POPULARES!
            </Typography>
          </FlexCenter>
        ) : null}

        <Slider {...settings}>
          {/* PRODUCT */}
          {value === "coffees" || value === "salty" || value === "sweets"
            ? PRODUCTS.map((item, index) => {
                return value === item.tag && item.popular === true ? (
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
            : /* CARROUSEL SPECIAL */
              BANNERS.map((item, index) => {
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
