import React, { useState, useEffect, Suspense } from "react";

import { BrowserRouter , HashRouter} from "react-router-dom";

import Loading from "./components/Loading";
// compoments paths
const AnimatedRoutes = React.lazy(() => import("./components/AnimatedRoutes"));

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
      { loading ? ( <Loading/>): ( <Suspense><AnimatedRoutes  /></Suspense> )}
     
      
      </HashRouter>
    </>
  );
}

export default App;
