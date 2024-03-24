import React from "react";
import {
  Typography,
  Box,
  IconButton,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import FlexCenter from "./muiComponents/FlexCenter";
import { Link, useParams } from "react-router-dom";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddIcon from "@mui/icons-material/Add";

import { motion } from "framer-motion";
import FlexRight from "./muiComponents/FlexRight";
import Title from "./Title";

const ListProduct = ({ obj, title, subtitle, tag }) => {
  return (
    <motion.div mode="wait">
      <Title title={title} subtitle={subtitle} />
      <IconButton
        sx={{ position: "absolute", top: 80, left: 20 }}
      
      >
        <Link to={`/home`}>
          <ArrowBackIosIcon
            sx={{ fontSize: 30, fontWeight: "bold", color: "primary.light" }}
          />
        </Link>
      </IconButton>

      <Box
        m={1}
        display="grid"
        gridTemplateColumns="repeat(4,1fr)"
        gridAutoRows="300px"
        gap={"0px"}
      >
        {obj.map((card) => {
          if (card.tag === tag) {
            return (
              <Box
                m={1}
                key={card.title}
                gridColumn="span 2"
                gridRow="span 1"
                flexDirection="column"
                justifyContent="space-between"
                flex="1 1 100%"
                component={motion.div}
                mode="wait"
                transition={{
                  duration: `${card.delay}`,
                  delay: `${card.delay}`,
                  ease: "easeOut",
                }}
                animate={{
           
                  opacity: [0, 1],
                }}
                exit={{
             
                  opacity: [1, 0],
                  transition: {
                    duration: `${card.delay}`,
                    delay: `${card.delay}`,
                    ease: "easeOut",
                  },
                }}
                sx={{
                  width: "90%",
                  height: 120,
                  borderRadius: 6,
                }}
              >
                <Card
                  sx={{
                    justifyContent: "left",
                    backgroundColor: "primary.light",

                    borderRadius: 4,
                    width: 1,
                    height: 270,
                  }}
                >
                  <Link to={`/singleProduct/${card.title}`} className="link">
                    <CardMedia
                      image={card.image}
                      sx={{ height: 170, width: "100%" }}
                    ></CardMedia>
                  </Link>
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",

                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <Typography
                        textAlign={"left"}
                        color={"primary.font"}
                        fontWeight={"bold"}
                        variant="p"
                        fontSize={"1.2rem"}
                        pr={1}
                        pb={2}
                        height={5}
                      >
                        {card.title}
                        <Typography
                          textAlign={"left"}
                          color={"primary.font"}
                          fontWeight={"bold"}
                          variant="body2"
                          component="p"
                          fontSize={"1.1rem"}
                          pr={1}
                          pt={1}
                        >
                          {card.price}
                        </Typography>
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            );
          } else {
            ("");
          }
        })}
      </Box>
    </motion.div>
  );
};

export default ListProduct;
