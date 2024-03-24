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

const Products = ({ filterState, search }) => {
  console.log(search);
  return (
    <FlexCenter
      sx={{
        backgroundColor: "primary.main",
        gap: 2,
        flexDirection: "column",
        pb: 3,
      }}
    >
      {PRODUCTS.map((card) => {
        return filterState === card.tag ? (
          /* card */
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
              backgroundColor: "primary.dark",
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
         
              textOverflow={"ellipsis"}
              sx={{
                justifyContent: "left",
                flexDirection: "column",
                textAlign: "left",
                alignItems: "start",
                
                pl: 1,
                width: 1,
                height: 1,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <Typography
                sx={{
                  textAlign: "left",
                  color: "primary.font",
                  fontWeight: "bold",
                  variant: "h5",
                  fontSize: "1rem",
                  pt: 2,
                }}
              >
                {card.title}
              </Typography>

              <Typography
                sx={{
                  textAlign: "left",
                  color: "primary.font",
                  variant: "h5",
                  component: "p",
                  fontSize: "0.8rem",
                  pt: 2,
                  width:'100%',
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {card.description}
              </Typography>

              <Typography
             
                sx={{
                  width: 1,
                  mt: 2,

                  textAlign: "left",
                  color: "primary.font",
                  fontWeight: "bold",

                  fontSize: "1.1rem",
                }}
              >
                {card.price}.00
              </Typography>
            </FlexCenter>
            <Link to={`/singleProduct/${card.title}`} className="link">
              <IconButton
                sx={{
                  display: "flex",
                  position: "relative",
                  bottom: "2rem",
                  borderRadius: 50,
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{
                    fontSize: 30,
                    color: "primary.font",
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
