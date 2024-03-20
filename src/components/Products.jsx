import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  IconButton,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PRODUCTS } from "../constants/products";
import FlexCenter from "./muiComponents/FlexCenter";

const Products = ({ value }) => {
  return (
    <FlexCenter pb={3} flexDirection={"column"} gap={2} >
      {PRODUCTS.map((card) => {
        return value === card.tag ? (
          <FlexCenter
            key={card.title}
            component={motion.div}
            mode="wait"
            transition={{
              duration: `${card.delay}`,
              delay: `${card.delay}`,
              ease: "easeOut",
            }}
            animate={{
              x: [-3000, 0],
              opacity: [0, 1],
            }}
            exit={{
              x: [0, 3000],
              opacity: [1, 0],
              transition: {
                duration: `${card.delay}`,
                delay: `${card.delay}`,
                ease: "easeOut",
              },
            }}
            sx={{
              backgroundColor: "primary.light",
              width: "90%",
              height: 120,
              borderRadius: 2,
            }}
          >
            <FlexCenter
              sx={{
                backgroundImage: `url(${card.image})`,
                width: "70%",
                height: "100%",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "none",
                borderRadius: 2,
              }}
            ></FlexCenter>
            <FlexCenter
              sx={{
                justifyContent: "left",
                background: "primary.light",
                width: 1,
                height: 1,
                borderRadius: 4,
              }}
            >
              <Typography
                sx={{
                  textAlign: "left",
                  color: "primary.dark",
                  fontWeight: "bold",
                  variant: "h5",
                  fontSize: "0.9rem",
                  paddingRight: 1,
                  paddingLeft: 1,
                  pt: "2rem",
                  height: 1,
                }}
              >
                {card.title}
                <br></br>
                <Typography
                  sx={{
                    textAlign: "left",
                    color: "primary.dark",
                    fontWeight: "bold",
                    variant: "h5",
                    component: "p",
                    fontSize: "1.1rem",
                    paddingTop: 1,
                  }}
                >
                  {card.price}
                </Typography>
              </Typography>
            </FlexCenter>
            <Link to={`/singleProduct/${card.title}`} className="link">
              <IconButton
                sx={{
                  position: "relative",
                  bottom: "2rem",
                  borderRadius: 50,
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{
                    fontSize: 30,
                    color: "primary.dark",
                    width: "1.8rem",
                    height: "1.8rem",
                  }}
                />
              </IconButton>
            </Link>
          </FlexCenter>
        ) : null;
      })}
    </FlexCenter>
  );
};

export default Products;
