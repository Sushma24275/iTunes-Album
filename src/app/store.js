import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "../slice/AlbumSlice";

export default configureStore({
  reducer: {
    albums: albumReducer,
  },
});
