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
//import motion
import { motion } from "framer-motion";

const Hero = ({ filterState }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <motion.div
    initial={{ opacity:0}}
    animate={{ opacity:1 }} 
    exit={{ opacity:0}} >


  <Box sx={{ margin: "auto", backgroundColor:'primary.main' }}>
      <Box >
        {filterState === "cafes" || filterState === "salados" || filterState === "dulces" ? (
          <FlexCenter>
            <Typography
              variant="h2"
              sx={{
                fontSize: "15px",
                fontWeight: "bolder",
                bgcolor: "primary.dark",
                color:"primary.font",
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
          {filterState === "cafes" || filterState === "salados" || filterState === "dulces"
            ? PRODUCTS.map((item, index) => {
                return filterState === item.tag && item.popular === true ? (
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
                return filterState === item.category &&
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
    </motion.div>
  );
};

export default Hero;
