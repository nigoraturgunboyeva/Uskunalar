import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "./Main";

const store = configureStore({
    reducer: {
      main: MainSlice
    },
  });
export default store