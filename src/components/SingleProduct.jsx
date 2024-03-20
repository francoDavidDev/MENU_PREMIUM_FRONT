import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Box,  IconButton, Typography } from "@mui/material";
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
  
  
  const [priceChange,setPriceChange]=useState(price)
 
  const boton = (v) => {
    setPriceChange(v)
    console.log(v)
  };

  return (
    <>
      <FlexCenter
        position="absolute"
        pt={0}
        sx={{
          background: `url(${image})`,
          backgroundPosition: "center ",
          backgroundSize: "cover",
          backgroundRepeat: "none",
          width: 1,
          height: "100%",
          alignItems: "start",
        }}
        component={motion.div}
        transition={{
          duration: 1.5,
          delay: 0.5,
          ease: "easeIn",
        }}
        animate={{
          opacity: [0, 1],
        }}
        exit={{
          opacity: [1, 0],
          transition: { duration: 0.3, delay: 0.3, ease: "easeOut" },
        }}
      >
        <IconButton
          sx={{ position: "absolute", top: 10, left: 20 }}
          component={motion.div}
          mode="wait"
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          animate={{
            x: [-3000, 0],
            opacity: [0, 1],
          }}
          exit={{
            x: [0, -3000],
            opacity: [1, 0],
            transition: { duration: 0.5, delay: 0.5, ease: "easeOut" },
          }}
        >
          <Link to={`/${tag}`}>
            <ArrowBackIosIcon
              sx={{
                fontSize: 30,
                color: "primary.light",
                width: "1.8rem",
                height: "1.8rem",
              }}
            />
          </Link>
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
            component="h2"
            sx={{ fontWeight: "bold", fontSize: "2rem" }}
          >
            {title}
            <Typography>{description2} </Typography>
          </Typography>
        </FlexCenter>
        <FlexCenter
          sx={{
            position: "absolute",
            top: 15,
            right: 20,
            borderRadius: 50,
            backgroundColor: "primary.light",
            
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" ,px:1 }}>
            {priceChange}
          </Typography>
        </FlexCenter>

        {/* size buttons */}
        { sizes !==  null ?(
           <Box
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
             onClick={()=>boton(sizes.small)}
               fontSize="small"
               sx={{
                 backgroundColor: "primary.light",
                 borderRadius: 50,
                 p: 0.5,
               }}
             />
     
           {/* medium button */}
 
           <CoffeeIcon
             onClick={()=>boton(sizes.medium)}
             fontSize="medium"
             sx={{ backgroundColor: "primary.light", borderRadius: 50, p: 0.9 }}
           />
 
           {/* large button */}
 
           <CoffeeIcon
             onClick={()=>boton(sizes.large)}
             fontSize="large"
             sx={{ backgroundColor: "primary.light", borderRadius: 50, p: 1 }}
           />
         </Box>
        ): (null) }
       
      </FlexCenter>
    </>
  );
};

export default SingleProduct;
