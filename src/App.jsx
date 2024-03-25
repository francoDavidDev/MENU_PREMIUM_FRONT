import React, { useEffect, useState } from 'react'

import { BrowserRouter , HashRouter} from "react-router-dom";

import AnimatedRoutes from "./components/AnimatedRoutes";
import Loading from "./components/Loading";

function App() {

  const[loading, setLoading]=useState(false);

  useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
          setLoading(false)      
      },6000)
  },[])


  return (
    
    
    <>
      <HashRouter>
      { loading ? ( <Loading/>): (  <AnimatedRoutes  />)}
     
      
      </HashRouter>
    </>
  );
}

export default App;
