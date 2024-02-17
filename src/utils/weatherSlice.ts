import { createSlice } from "@reduxjs/toolkit";
import { Weather } from "../types/weather.types";

const initialState: Weather[] = [];

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addWeather: (state, action: { type: string; payload: Weather }) => {
      state.push(action.payload);
    },
  },
});

export const weatherActions = { ...weatherSlice.actions };
export default weatherSlice;
