import React, { useEffect, useState } from 'react'

import { BrowserRouter } from "react-router-dom";

import AnimatedRoutes from "./components/AnimatedRoutes";
import Loading from "./components/Loading";

function App() {

  const[loading, setLoading]=useState(false);

  useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
          setLoading(false)      
      },3000)
  },[])


  return (
    
    
    <>
      <BrowserRouter>
      { loading ? ( <Loading/>): (  <AnimatedRoutes  />)}
     
      
      </BrowserRouter>
    </>
  );
}

export default App;
