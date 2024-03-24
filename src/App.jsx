import React from "react";

import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatedRoutes  mode="wait"/>
      </BrowserRouter>
    </>
  );
}

export default App;
