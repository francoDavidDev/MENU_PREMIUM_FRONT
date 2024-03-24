import { createSlice } from "@reduxjs/toolkit";

const initialState = true

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    MODAL_FUNCION: (value)=>{
         // Invertimos el valor del estado
         const newState =  !value
         return newState
    }
  },
});

// exportamos solo el la funcion que queremos (actions)
export const {MODAL_FUNCION} = modalSlice.actions
// exportamos solo el reducer
export default modalSlice.reducer;
