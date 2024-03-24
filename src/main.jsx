import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'
// import redux provider
import { Provider } from 'react-redux'
import store from './app/store.js'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//tonos de verde
const theme = createTheme({
  palette:{
    mode:'light',
    primary:{
      main:'#084838',
      second:'#FFD28F',
      dark:'#C89868',
      light:'#DFB6B2',
      font:'#F8E8D8',
    },
    text: {
      primary: '#F8E8D8', // Color de texto primario
      secondary: '#FFD28F', // Color de texto secundario si es necesario
      font: '#854F6C', // Color de font
    },
    secondary:{
    main:'#FFFFEC'
    },
    
  },
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider   store={store}>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
