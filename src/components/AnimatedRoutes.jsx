import React, { useState, useEffect, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Logo from "./Header";

import Home from "../scenes/Home";
//import Coffes from '../scenes/Coffes'
//import CoffeeSingle from '../scenes/CoffeeSingle'
//import Sugars from '../scenes/Sugars'
//import Salty from '../scenes/Saltys'
//import Error404 from '../scenes/Error404'

//const Home = React.lazy(() => import("../scenes/Home"));
const SingleProduct = React.lazy(() => import("./SingleProduct"));
const Error404 = React.lazy(() => import("../scenes/Error404"));

const AnimatedRoutes = () => {
  const location = useLocation();

  const [w, setW] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {w <= 700 ? <></> : <></>}

      <AnimatePresence>
        <Routes Routes location={location} key={location.pathname}>
          {w <= 700 ? (
            <>
              <Route path="/" element={<Home mode="wait" />} />

              <Route
                path="/singleProduct/:productTitle"
                element={
                  <Suspense>
                    <SingleProduct mode="wait" />
                  </Suspense>
                }
              />
            </>
          ) : (
            <>
              <Route
                path="/*"
                element={
                  <Suspense>
                    <Error404 />
                  </Suspense>
                }
              />
            </>
          )}
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;
