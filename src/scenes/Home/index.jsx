import React, { useState, useEffect } from "react";
// import Motion
import { animate, motion } from "framer-motion";
//import component the MUI

// import componentes
import Carrousel from "../../components/Carrousel";
import Products from "../../components/Products";
import Header from "../../components/Header";
import BannersMain from "../../components/BannersMain";
import FlexCenter from "../../components/muiComponents/FlexCenter";
//icon MUI
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
// My components
import Modal from "../../components/Modal";
// import useSelector the redux
import { useDispatch, useSelector } from "react-redux";
import { MODAL_FUNCION } from "../../features/modal/modalSlice";
import MenuFilter from "../../components/MenuFilter";


const Home = () => {
  const [value, setValue] = useState("cafes");
  const [age, setAge] = useState("");

  //redux
  const modalstate = useSelector((state) => state.modal);
  const filterState = useSelector((state) => state.buttons);
  (filterState)

  const dispach = useDispatch();
  const handleModal = (value) => {
    dispach(MODAL_FUNCION(value));
  };

  useEffect(() => {
    setAge(value);
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const element = document.getElementById("animatedElement");

    // Función para iniciar la animación cada 4 segundos
    const startAnimation = () => {
      element.style.animation = "bounce 1s infinite"; // Inicia la animación
      setTimeout(() => {
        element.style.animation = "none"; // Detiene la animación después de 1 segundo
      }, 1000);
    };

    // Iniciar la animación inicialmente
    startAnimation();

    // Establecer un intervalo para iniciar la animación cada 4 segundos
    const interval = setInterval(startAnimation, 4000);

    // Limpiar el intervalo al desmontar el componente para evitar pérdida de memoria
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      {modalstate ? <Modal /> : null}

      <motion.div
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{opacity:0}}
       
      >
        {/* Filter */}
        <FlexCenter
          sx={{
            p: 2,
            backgroundColor: "primary.main",
            justifyContent: "space-between",
          }}
        >
          <MenuFilter/>
        

          {/* modal open icon */}
          <motion.div
           initial={{ x: +200 }}
           animate={{ x: 0 }} 
           exit={{ x: +200 }} >
          <LiveHelpIcon
            onClick={() => handleModal()}
            id="animatedElement"
            sx={{ fontSize: "2.5rem"   , color: "primary.second", }}
          />
          </motion.div>
        </FlexCenter>

        <Carrousel filterState={filterState} />
        <BannersMain filterState={filterState} />
        {filterState === "cafes" || filterState === "dulces" || filterState === "salados" ? (
          <Products filterState={filterState} />
        ) : null}
      </motion.div>
    </>
  );
};

export default Home;
