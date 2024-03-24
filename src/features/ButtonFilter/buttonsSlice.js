import { createSlice } from "@reduxjs/toolkit";

const initialState = 'promos'

export const buttonsSlice = createSlice({
  name: "buttons",
  initialState,
  reducers: {
    BUTTON_FUNTION: (state, action)=>{
         // Invertimos el valor del estado
         return action.payload;
    }
  },
});

// exportamos solo el la funcion que queremos (actions)
export const {BUTTON_FUNTION} = buttonsSlice.actions
// exportamos solo el reducer
export default buttonsSlice.reducer;
