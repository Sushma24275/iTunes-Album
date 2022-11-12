import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "../slice/AlbumSlice";

// this is for configureStore
export default configureStore({
  reducer: {
    albums: albumReducer,
  },
});
