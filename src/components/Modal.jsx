import React, { useState } from "react";
import FlexCenter from "./muiComponents/FlexCenter";
//import images
import backgroundCoffe from "../assets/img/modal/backgroundCoffeMini.png";
import coffe from "../assets/img/modal/coffe.png";
import text from "../assets/img/modal/text.png";
//mui icons
import CancelIcon from "@mui/icons-material/Cancel";
// mui Components
import { Box, Typography } from "@mui/material";
// import useSelector the redux
import {  useDispatch, useSelector } from "react-redux";
import { MODAL_FUNCION } from "../features/modal/modalSlice";


const Modal = () => {

  const modalstate = useSelector(state => state.modal)

  const dispach = useDispatch()

  const handleModal =(value)=>{
   dispach( MODAL_FUNCION(value))
  }



  return (
    <FlexCenter
      sx={{
        display: modalstate ? 'flex': 'none',
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "rgba(255, 0, 0, 0)",
        zIndex: 50,
        alignItems: "center",
      }}
    >
      <FlexCenter
        sx={{
          position: "absolute",
          width: "70%",
          height: "80%",
          background: "#0A4039",
          zIndex: 5,
          borderRadius: 5,
          alignItems: "end",
          overflow: "hidden",
        }}
      >
        {/* ICON */}
        <CancelIcon
        onClick={()=>handleModal()}
          sx={{
            fontSize: "2.5rem",
            position: "absolute",
            top: 1,
            zIndex: 5,
            right: 1,
            color: "primary.second",
          
          }}
        />
        <FlexCenter
          sx={{
            mt: 2,
            position: "absolute",
            top: 20,
            width: "80%",
            textAlign: "center",
            flexDirection: "column",
            color: "white",
          }}
        >
          <img src={text} alt="" width={"120%"} height={"100%"} />
        </FlexCenter>

        <FlexCenter sx={{ width: 1, top: 1, position: "relative" }}>
          <img src={backgroundCoffe} alt="" width={"100%"} height={"100%"} />
        </FlexCenter>

        <FlexCenter
          sx={{
            width: 1,
            bottom: 0,
            position: "absolute",
            backgroundColor: "rgba(255, 0, 0, 0)",
          }}
        >
          <img src={coffe} alt="" width={"80%"} height={"100%"} />
        </FlexCenter>
      </FlexCenter>
    </FlexCenter>
  );
};

export default Modal;
