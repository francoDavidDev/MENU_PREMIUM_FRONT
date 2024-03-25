import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Box, IconButton, Typography } from "@mui/material";
import FlexCenter from "./muiComponents/FlexCenter";
import { motion } from "framer-motion";
import { PRODUCTS } from "../constants/products";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CoffeeIcon from "@mui/icons-material/Coffee";

const SingleProduct = () => {
  const { productTitle } = useParams();
  //console.log(productTitle);
  const product = PRODUCTS.find((product) => product.title === productTitle);
  const { title, image, description2, price, tag, sizes } = product;

  const [priceChange, setPriceChange] = useState(price);

  console.log(sizes)
  const boton = (v) => {
    setPriceChange(v);
    console.log(v);
  };

  return (
    <>
      <FlexCenter
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{opacity:0}}
        position="absolute"
        pt={0}
        sx={{
          background: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${image})`,
          backgroundPosition: "center ",
          backgroundSize: "cover",
          backgroundRepeat: "none",
          width: 1,
          height: "100%",
          alignItems: "start",
        }}
       
       
      >
        <IconButton
          sx={{ position: "absolute", top: 10, left: 20 ,  borderRadius: 50,
    }}
          component={motion.div}
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          exit={{x:-200}}
        >
          <Link to={`/`}>
            <ArrowBackIosIcon
              sx={{
                fontSize: 30,
                color: "primary.dark",
                width: "1.8rem",
                height: "1.8rem",
              }}
            />
          </Link  >
        </IconButton>
        <FlexCenter
          sx={{
            justifyContent: "left",
            flexDirection: "column",
            textAlign: "left",
            p: 2,
            color: "white",
            mt: 20,
          }}
        >
          <Typography
             component={motion.p}
             initial={{ x: -500 }}
             animate={{ x: 0 }}
             exit={{x:-500}}
         
            sx={{
              fontWeight: "bold",
              fontSize: "2rem",
              color: "primary.font",
            }}
          >
            {title}
            <Typography>{description2} </Typography>
          </Typography>
        </FlexCenter>
        <FlexCenter
           component={motion.div}
           initial={{ x: 200 }}
           animate={{ x: 0 }}
           exit={{x:200}}
          sx={{
            position: "absolute",
            top: 15,
            right: 20,
            borderRadius: 50,
            backgroundColor: "primary.main",
            color: "primary.font",
          }}
        >
          <Typography
            
          sx={{ fontWeight: "bold", fontSize: "1.5rem", px: 1 }}>
            {priceChange}
          </Typography>
        </FlexCenter>

        {/* size buttons */}
        {sizes ? (
          <Box
          component={motion.div}
          initial={{ y:200 }}
          animate={{ y:0 }}
          exit={{y:200}}
            sx={{
              width: 1,
              pb: 2,
              position: "absolute",
              bottom: "2rem",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {/* small button */}

            <CoffeeIcon
              onClick={() => boton(sizes.small)}
              fontSize="small"
              sx={{
                backgroundColor: "primary.light",
                borderRadius: 50,
                p: 0.5,
                backgroundColor: "primary.main",
                color: "primary.font",
              }}
            />

            {/* medium button */}

            <CoffeeIcon
              onClick={() => boton(sizes.medium)}
              fontSize="medium"
              sx={{
                borderRadius: 50,
                p: 0.9,
                backgroundColor: "primary.main",
                color: "primary.font",
              }}
            />

            {/* large button */}

            <CoffeeIcon
              onClick={() => boton(sizes.large)}
              fontSize="large"
              sx={{
                backgroundColor: "primary.light",
                borderRadius: 50,
                p: 1,
                backgroundColor: "primary.main",
                color: "primary.font",
              }}
            />
          </Box>
        ) : null}
      </FlexCenter>
    </>
  );
};

export default SingleProduct;
