import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
// import { statusFilters } from "./constants";


const filtersSlice = createSlice({
  name: "filter",
  initialState: initialState.filter,
  reducers: {
    setFilter(state, action) {
      state = action.payload;
    },
  },
});
// Експортуємо генератори екшенів та редюсер
export const { setFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;