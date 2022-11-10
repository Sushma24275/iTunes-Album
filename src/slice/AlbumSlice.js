import { createSlice } from "@reduxjs/toolkit";

export const albumSlice = createSlice({
  name: "todos",
  initialState: {
    allAlbums: [],
    favouriteAlbums: [],
  },
  reducers: {
    addAlbums: (state, action) => {
      state.allAlbums.push(...action.payload);
    },
    addFavouriteAlbums: (state, action) => {
      state.favouriteAlbums.push(action.payload);
    },
    removeFavouriteAlbums: (state, action) => {
      const removeItem = action.payload.id.label;
      return {
        ...state,
        favouriteAlbums: state.favouriteAlbums.filter(
          (item) => item.id.label !== removeItem
        ),
      };
    },
  },
});

// this is for dispatch
export const { addAlbums, addFavouriteAlbums, removeFavouriteAlbums } =
  albumSlice.actions;

// this is for configureStore
export default albumSlice.reducer;
