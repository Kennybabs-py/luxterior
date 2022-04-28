import { createSlice } from "@reduxjs/toolkit";
// import function calling api here

const loadFurnitures = () => {
  return async (dispatch) => {
    const furnitures = await fetchFurnitures();
    dispatch({ type: "allFurnitures/addFurnitures", payload: furnitures });
  };
};

export const allFurnituresSlice = createSlice({
  name: "allFurnitures",
  initialState: { furnitures: [] },
  reducers: {
    addFurnitures: (state, action) => {
      state.furnitures = action.payload;
    },
  },
});

export default allFurnituresSlice.reducer;
