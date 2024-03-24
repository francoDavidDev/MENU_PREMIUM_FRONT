import { configureStore } from "@reduxjs/toolkit"
import modalReducer from "../features/modal/modalSlice"
import buttonFilterReducer from "../features/ButtonFilter/buttonsSlice"

export default configureStore({
   reducer:{
    modal: modalReducer,
    buttons:buttonFilterReducer
   }
})